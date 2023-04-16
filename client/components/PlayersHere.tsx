// this component sits inside Frame component
// this function should take socket as param

import { useState } from 'react'
import { Socket } from 'socket.io-client'
import { ActivePlayer } from '../../models/player'

interface Props {
  socket: Socket
}

export default function PlayersHere({ socket }: Props) {
  const [users, setUsers] = useState([] as ActivePlayer[])

  socket.on('player logged in', (player) => {
    setUsers([...users, player])
  })

  socket.on('player logged out', (player) => {
    setUsers(users.filter((user) => user.id != player.id))
  })

  // socket.on('online players')... generate a list of currently online players

  socket.on('online players', (users) => {
    setUsers(users)
  })

  return (
    <div className="player-list-container">
      <ul>
        {users.map((user) => (
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
    </div>
  )
}

// map over each user in 'users' state and display them
// as individual player names, with optional expansion
// use <details> and <summary> and list these elements in <ul><li>
