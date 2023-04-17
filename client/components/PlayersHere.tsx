import { useState } from 'react'
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

  socket.on('player logged in', (player) => {
    setUsers([...users, player])
  })

  socket.on('player logged out', (player) => {
    setUsers(users.filter((user) => user.id != player.id))
  })

  socket.on('player moved', (id: string, location: string) => {
    console.log('saw player move')
    setUsers(
      users.map((user) => (user.id === id ? { ...user, location } : user))
    )
  })

  socket.on('online players', (users) => {
    setUsers(users)
  })

  return (
    <div className="players-here-container">
      <h2>Players {isGlobal ? 'Online' : 'Here'}</h2>
      <ul>
        {(isGlobal
          ? users
          : users.filter(({ location }) => location === loc)
        ).map((user) => (
          <li key={user.id}>
            <details>
              <summary>
                {user.name} <span>({user.pronouns})</span>
              </summary>
              <p>{user.description}</p>
            </details>
          </li>
        ))}
      </ul>
      <div className="scopeControl">
        <button onClick={() => setIsGlobal(true)} disabled={isGlobal}>
          Global
        </button>
        <button onClick={() => setIsGlobal(false)} disabled={!isGlobal}>
          Local
        </button>
      </div>
    </div>
  )
}
