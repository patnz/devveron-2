import { ChangeEvent, FormEvent, useState } from 'react'
import { Socket } from 'socket.io-client'

import { Message } from '../../models/messages'

interface Props {
  socket: Socket
}

export default function Chat({ socket }: Props) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([] as Message[])

  const newMessage = (msg: Message) => setMessages([...messages, msg])

  const handleChat = (e: FormEvent) => {
    e.preventDefault()
    socket.emit('send message', message)
    setMessage('')
  }

  // socket.on('', () => newMessage(''))
  // socket.on('', () => newMessage(''))

  socket.on('new message', (msg) => newMessage(msg))

  return (
    <div className="chat-container">
      <div className="chat-content">
        <h1>Devveron 2.0 Chat</h1>
        {messages.map(({ name, message }, i) => (
          <p key={i}>
            <span>{name}:</span>
            {message}
          </p>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleChat}>
        <label htmlFor="message">New message:</label>
        <input
          type="text"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
      </form>
    </div>
  )
}
