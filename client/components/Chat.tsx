import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

import { Message } from '../../models/messages'
import { useLocation } from 'react-router-dom'

interface Props {
  socket: Socket
}

export default function Chat({ socket }: Props) {
  const [message, setMessage] = useState('')
  const [globalMessages, setGlobalMessages] = useState([] as Message[])
  const [localMessages, setLocalMessages] = useState([] as Message[])
  const [inGlobalChat, setInGlobalChat] = useState(true)
  const loc = useLocation().pathname.split('/')[2]

  const newGlobalMessage = (msg: Message) =>
    setGlobalMessages([...globalMessages, msg])
  const newLocalMessage = (msg: Message) =>
    setLocalMessages([...localMessages, msg])

  useEffect(() => {
    setLocalMessages([])
  }, [loc])

  const handleChat = (e: FormEvent) => {
    e.preventDefault()
    socket.emit(
      `send ${inGlobalChat ? 'global' : 'local'} message`,
      message,
      loc
    )
    setMessage('')
  }

  socket.on('player logged out', ({ name, location }) => {
    newGlobalMessage({ message: `${name} has logged out` })
    if (loc === location) {
      newLocalMessage({ message: `${name} has logged out` })
    }
  })

  socket.on('player logged in', ({ name, location }) => {
    newGlobalMessage({ message: `${name} has logged in` })
    if (loc === location) {
      newLocalMessage({ message: `${name} has logged in` })
    }
  })

  socket.on('player left', (name, to) => {
    newLocalMessage({ message: `${name} heads to ${to}` })
  })

  socket.on('player arrived', (name, from) => {
    newLocalMessage({ message: `${name} arrives from ${from}` })
  })

  socket.on('new global message', (msg) => {
    newGlobalMessage(msg)
  })

  socket.on('new local message', (msg) => {
    newLocalMessage(msg)
  })

  //chat-container
  ////chat-content-container
  //scope-control-container
  //// scope-button x2
  //chat-input-container
  ////chat-prompt
  ////chat-input-box

  return (
    <div className="chat-container">
      <div className="title-and-scope-container">
        <h2 className="chat-title">Chat</h2>
        <div className="scope-control-container">
          <button
            className="scope-button"
            onClick={() => setInGlobalChat(true)}
            disabled={inGlobalChat}
          >
            Global
          </button>
          <button
            className="scope-button"
            onClick={() => setInGlobalChat(false)}
            disabled={!inGlobalChat}
          >
            Local
          </button>
        </div>
      </div>
      <div className="chat-content-container">
        {(inGlobalChat ? globalMessages : localMessages).map(
          ({ name, message }, i) => (
            <p className="chat-message" key={i}>
              {name && <span>{name}: </span>}
              {message}
            </p>
          )
        )}
      </div>
      <form className="chat-input-container" onSubmit={handleChat}>
        <label className="chat-prompt" htmlFor="message">
          New message:
        </label>
        <input
          type="text"
          className="chat-input-box"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
      </form>
    </div>
  )
}
