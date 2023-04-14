import { addPlayer, getPlayer, updatePlayer } from '../db'
import { PlayerInfo, Player } from '../../models/player'

export function loginHandlers(io: any, socket: any) {
  socket.on('get player data', (user: string) => {
    console.log(`request for ${user}'s char`)
    getPlayer(user)
      .then((player) => {
        if (player) {
          console.log('found')
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
          // io.broadcast to tell other users someone's logged on also on char creation
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
        socket.info = {
          name: player.char_name,
          pronouns: player.pronouns,
          description: player.description,
        }
        io.to(socket.id).emit('send player data', player)
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('logging out', (player: Player) => {
    updatePlayer(player)
      .then(() => {
        console.log('character logged out')
        socket.broadcast.emit('player logged out', socket.info)
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })
}
