import { addPlayer, getPlayer } from '../db'
import { PlayerInfo } from '../../models/player'

export function loginHandlers(io: any, socket: any) {
  socket.on('get player data', (user: string) => {
    console.log(`request for ${user}'s char`)
    getPlayer(user)
      .then((player) => {
        if (player) {
          console.log('found')
          io.to(socket.id).emit('send player data', player)
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
        io.to(socket.id).emit('send player data', player)
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })
}
