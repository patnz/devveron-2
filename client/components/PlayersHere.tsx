import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { ActivePlayer } from '../../models/player'
import { useLocation } from 'react-router-dom'

interface Props {
  socket: Socket
}

export default function PlayersHere({ socket }: Props) {
  const [users, setUsers] = useState([] as ActivePlayer[])
  const [isGlobal, setIsGlobal] = useState(true)
  const loc = useLocation().pathname.split('/')[2]

  useEffect(() => {
    socket.emit('get online players')
  }, [socket])

  socket.on('player logged in', (player) => {
    console.log('saw player log in')
    setUsers([...users, player])
  })

  socket.on('player logged out', (player) => {
    console.log('saw player log out')
    setUsers(users.filter((user) => user.id !== player.id))
  })

  socket.on('player used mirror', (player) => {
    console.log('someone used mirror')
    setUsers(users.map((user) => (user.id === player.id ? player : user)))
  })

  socket.on('player moved', (id: string, location: string) => {
    console.log('saw player move')
    setUsers(
      users.map((user) => (user.id === id ? { ...user, location } : user))
    )
  })

  socket.on('online players', (users) => {
    console.log('getting users already online')
    setUsers(users)
  })

  return (
    <div className="players-here-container">
      <div className="players-here-title-and-scope-container">
        <h2 className="players-here-title">
          Players {isGlobal ? 'Online' : 'Here'}
        </h2>
        <div className="scope-control-container">
          <button
            className="scope-button"
            onClick={() => setIsGlobal(true)}
            disabled={isGlobal}
          >
            Global
          </button>
          <button
            className="scope-button"
            onClick={() => setIsGlobal(false)}
            disabled={!isGlobal}
          >
            Local
          </button>
        </div>
      </div>
      <div className="players-here-list">
        {(isGlobal
          ? users
          : users.filter(({ location }) => location === loc)
        ).map((user) => (
          <details key={user.id}>
            <summary>
              {user.name} <span>({user.pronouns})</span>
            </summary>
            <p>{user.description}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
