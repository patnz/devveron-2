import { Player, Progress } from '../../models/player'

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
    socket.data = player
  })
}
