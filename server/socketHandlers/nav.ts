import { roomStates } from './state'

export function navHandlers(io: any, socket: any) {
  socket.on('moving', (from: string, to: string) => {
    socket.leave(from)
    socket.join(to)
    socket.to(from).emit('player left', socket.data.char_name, to)
    socket.to(to).emit('player arrived', socket.data.char_name, from)
    socket.broadcast.emit('player moved', socket.id, to)
    socket.data.location = to
    if (roomStates[to]) {
      io.to(socket.id).emit('room state', roomStates[to])
    }
  })

  socket.on('using mirror', () => {
    roomStates.salon.charsUsingMirror.push(socket.data.char_name)
    console.log(roomStates.salon.charsUsingMirror)
    io.to('salon').emit('room state', roomStates.salon)
  })
}
