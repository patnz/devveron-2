import express from 'express'
import path from 'path'
import { PlayerInfo } from '../models/player'
import { Message } from '../models/messages'
import { addPlayer, getPlayer } from './db'

const http = require('http')
const sockets = require('socket.io')

const expressServer = express()

expressServer.use(express.json())
expressServer.use(express.static(path.join(__dirname, 'public')))

const fullServer = http.Server(expressServer)
const io = sockets(fullServer)

io.on('connection', (socket: any) => {
  console.log('socket connected:', socket.id)

  socket.on('get player data', (user: string) => {
    getPlayer(user)
      .then((player) => {
        if (player) {
          io.to(socket.id).emit('send player data', player)
        } else {
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
        io.to(socket.id).emit('send player data', player)
      })
      .catch((err) => {
        console.log(err.message)
        io.to(socket.id).emit('error', err.message)
      })
  })

  socket.on('send message', (msg: Message) => {
    io.emit('new message', msg)
  })
})

export default fullServer
