import { addPlayer, getPlayer, updatePlayer } from '../db'
import { PlayerInfo, Player } from '../../models/player'

export function loginHandlers(io: any, socket: any) {
  socket.on('get player data', (user: string) => {
    console.log(`request for ${user}'s char`)
    getPlayer(user)
      .then((player) => {
        if (player) {
          console.log('found')
          playerBroadcast(player, socket, io)
          // io.broadcast to tell other users someone's logged on also on char creation
          // & io.to this socket w/ info of other sockets
        } else {
          console.log('sending to create a character')
          io.to(socket.id).emit('do character creation')
        }
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('create character', (player: PlayerInfo) => {
    addPlayer(player)
      .then((player) => {
        console.log('character created')
        playerBroadcast(player, socket, io)
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('update character', (player: Player) => {
    console.log('Update in the Magic Mirror')
    updatePlayer(player)
      .then(() => {
        console.log('character updated')
        socket.broadcast.emit('character updated', {
          id: socket.id,
          ...socket.info,
        })
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('disconnect', (player: Player) => {
    console.log('leaving')
  })

  socket.on('logging out', (player: Player) => {
    console.log('bye')
    updatePlayer(player)
      .then(() => {
        console.log('character logged out')
        socket.broadcast.emit('player logged out', {
          id: socket.id,
          ...socket.info,
        })
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })
}

export async function playerBroadcast(player: Player, socket: any, io: any) {
  socket.info = {
    name: player.char_name,
    pronouns: player.pronouns,
    description: player.description,
  }
  io.to(socket.id).emit('send player data', player)
  socket.broadcast.emit('player logged in', {
    id: socket.id,
    ...socket.info,
  })
  const otherSockets = await socket.broadcast.fetchSockets()
  // console.log(otherSockets)
  io.to(socket.id).emit(
    'online players',
    otherSockets.map((socket: any) => ({
      id: socket.id,
      ...socket.info,
    }))
  )
}
