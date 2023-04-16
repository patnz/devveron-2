import express from 'express'
import path from 'path'
import { Message } from '../models/messages'
import { loginHandlers } from './socketHandlers/login'

const http = require('http')
const sockets = require('socket.io')

const expressServer = express()

// expressServer.use(express.json())
expressServer.use(express.static(path.join(__dirname, 'public')))

const fullServer = http.Server(expressServer)
const io = sockets(fullServer)

io.on('connection', (socket: any) => {
  console.log('socket connected:', socket.id)

  loginHandlers(io, socket)

  socket.on('send message', (msg: string) => {
    io.emit('new message', { name: socket.info.name, message: msg })
  })
})

expressServer.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

export default fullServer
