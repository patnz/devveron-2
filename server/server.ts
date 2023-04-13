import express from 'express'
import path from 'path'
import { join } from 'node:path'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
