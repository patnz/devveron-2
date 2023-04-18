import { Player, Progress } from '../../models/player'
import { roomStates } from './state'

export function updateHandlers(io: any, socket: any) {
  socket.on('update inventory', (inventory: string[]) => {
    socket.data = { ...socket.data, inventory }
  })

  socket.on('update gold', (gold: number) => {
    socket.data = { ...socket.data, gold }
  })

  socket.on('update progress', (progress: Progress) => {
    socket.data = { ...socket.data, progress }
  })

  socket.on('update character', (player: Player) => {
    console.log('Update in the Magic Mirror')
    roomStates.salon.charsUsingMirror =
      roomStates.salon.charsUsingMirror.filter(
        (name) => name !== socket.data.char_name
      )
    console.log(roomStates.salon.charsUsingMirror)
    io.to('salon').emit('room state', roomStates.salon)
    socket.data = player
    socket.broadcast.emit('player used mirror', {
      id: socket.id,
      name: socket.data.char_name,
      pronouns: socket.data.pronouns,
      description: socket.data.description,
      location: socket.data.location,
    })
  })
}
