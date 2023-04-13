import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import LoginPage from './LoginPage'
import { Nav } from './Nav'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { Player } from '../../models/player'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NewPlayer from './NewPlayer'
import Frame from './Frame'
import TownSquare from './TownSquare'

const url = 'http://localhost:3000'

const socket = io(url)

function App() {
  const { user } = useAuth0()
  const [player, setPlayer] = useState({} as Player)
  const nav = useNavigate()

  useEffect(() => {
    console.log(user)
    if (user) {
      socket.emit('get player data', user.pub)
    }
  }, [user])

  socket.on('send player data', (player: Player) => {
    setPlayer(player)
    console.log('got player data, sending to location...')
    nav(`/loc/${player.location}`)
  })
  socket.on('do character creation', () => {
    nav('/create')
  })

  return (
    <>
      <Nav />
      <IfNotAuthenticated>
        <LoginPage />
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Routes>
          <Route path="" element={<p>Loading...</p>} />
          <Route path="/create" element={<NewPlayer socket={socket} />} />
          <Route path="/loc/" element={<Frame />}>
            <Route path="town-square" element={<TownSquare />} />
          </Route>
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
