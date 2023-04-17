export function navHandlers(io: any, socket: any) {
  socket.on('moving', (from: string, to: string) => {
    socket.leave(from)
    socket.join(to)
    socket.to(from).emit('player left', socket.data.char_name, to)
    socket.to(to).emit('player arrived', socket.data.char_name, from)
    socket.broadcast.emit('player moved', socket.id, to)
    socket.data.location = to
  })
}
