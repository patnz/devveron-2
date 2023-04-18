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

  socket.on('disconnect', () => {
    console.log('leaving')
    console.log(socket.data)
    if (socket.data.char_name) {
      updatePlayer(socket.data)
        .then(() => {
          console.log('character logged out')
          socket.broadcast.emit('player logged out', {
            id: socket.id,
            name: socket.data.char_name,
            location: socket.data.location,
          })
        })
        .catch((err) => {
          console.log(err.message)
          io.to(socket.id).emit('error', err.message)
        })
    }
  })

  socket.on('logging out', (player: Player) => {
    console.log('bye')
    updatePlayer(player)
      .then(() => {
        console.log('character logged out')
        socket.broadcast.emit('player logged out', {
          id: socket.id,
          name: socket.data.char_name,
          location: socket.data.location,
        })
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('get online players', async () => {
    const otherSockets = await socket.broadcast.fetchSockets()
    // console.log(otherSockets)
    io.to(socket.id).emit(
      'online players',
      otherSockets.map((socket: any) => ({
        id: socket.id,
        name: socket.data.char_name,
        pronouns: socket.data.pronouns,
        description: socket.data.description,
        location: socket.data.location,
      }))
    )
  })
}

export function playerBroadcast(player: Player, socket: any, io: any) {
  socket.data = player
  io.to(socket.id).emit('send player data', player)
  socket.broadcast.emit('player logged in', {
    id: socket.id,
    name: socket.data.char_name,
    pronouns: socket.data.pronouns,
    description: socket.data.description,
    location: socket.data.location,
  })
  socket.join(player.location)
}
