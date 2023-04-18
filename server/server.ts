import express from 'express'
import path from 'path'
import { loginHandlers } from './socketHandlers/login'
import { navHandlers } from './socketHandlers/nav'
import { chatHandlers } from './socketHandlers/chat'
import { updateHandlers } from './socketHandlers/update'

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
  navHandlers(io, socket)
  chatHandlers(io, socket)
  updateHandlers(io, socket)
})

expressServer.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

export default fullServer
