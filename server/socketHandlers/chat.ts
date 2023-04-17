export function chatHandlers(io: any, socket: any) {
  socket.on('send global message', (msg: string) => {
    io.emit('new global message', { name: socket.data.char_name, message: msg })
  })

  socket.on('send local message', (msg: string, location: string) => {
    io.to(location).emit('new local message', {
      name: socket.data.char_name,
      message: msg,
    })
  })
}
