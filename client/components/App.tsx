import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import LoginPage from './LoginPage'
import { Nav } from './Nav'
import io from 'socket.io-client'
import { useEffect, useState, useCallback } from 'react'
import { Player } from '../../models/player'
import { Route, Routes, useNavigate, useBeforeUnload } from 'react-router-dom'
import NewPlayer from './NewPlayer'
import Frame from './Frame'
import TownSquare from './TownSquare'
import Tavern from './Tavern'
import Salon from './Salon'
import EditPlayer from './EditPlayer'

const url = 'http://localhost:3000'

const socket = io(url)

function App() {
  const { user, isAuthenticated } = useAuth0()
  const [player, setPlayer] = useState({} as Player)
  const nav = useNavigate()

  const loggingOut = useCallback(() => {
    socket.emit('logging out', player)
  }, [player])

  useEffect(() => {
    console.log(user)
    if (user) {
      socket.emit('get player data', user.sub)
    }
  }, [user])

  // socket on player logout send player obj

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
      <Nav loggingOut={loggingOut} />
      <IfNotAuthenticated>
        <LoginPage />
      </IfNotAuthenticated>
      <IfAuthenticated>
        {/* <Chat socket={socket} /> */}
        <Routes>
          <Route path="" element={<p>Loading...</p>} />
          <Route path="/create" element={<NewPlayer socket={socket} />} />
          <Route
            path="/update"
            element={
              <EditPlayer
                socket={socket}
                player={player}
                setPlayer={setPlayer}
              />
            }
          />
          <Route path="/loc/" element={<Frame socket={socket} />}>
            <Route
              path="town-square"
              element={<TownSquare player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="tavern"
              element={<Tavern player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="salon"
              element={<Salon player={player} setPlayer={setPlayer} />}
            />
          </Route>
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
