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

  return <div className="player-list-container"></div>
}

// map over each user in 'users' state and display them
// as individual player names, with optional expansion
// use <details> and <summary> and list these elements in <ul><li>
