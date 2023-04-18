import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import LoginPage from './LoginPage'
import { Nav } from './Nav'
import io from 'socket.io-client'
import { useEffect, useState, useCallback } from 'react'
import { Player } from '../../models/player'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NewPlayer from './NewPlayer'
import Frame from './Frame'
import TownSquare from './TownSquare'
import Tavern from './Tavern'
import Salon from './Salon'
import EditPlayer from './EditPlayer'
import Church from './Church'
import ItemShop from './ItemShop'
import Docks from './Docks'
import TownEntrance from './TownEntrance'
import AdventurerCamp from './AdventurerCamp'
import Quarry from './Quarry'
import Woods from './Woods'
import Castle from './Castle'
import Cave from './Cave'

const url = 'http://localhost:3000'

const socket = io(url)

function App() {
  const { user } = useAuth0()
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

  // Custom functions to be passed into the components, to replace setPlayer

  const addGold = (gold: number) => {
    gold = player.gold + gold
    setPlayer({ ...player, gold })
    socket.emit('update gold', gold)
  }
  const updateQuests = (quests: Record<string, number>) => {
    const progress = {
      ...player.progress,
      quests: { ...player.progress.quests, ...quests },
    }
    setPlayer({
      ...player,
      progress,
    })
    socket.emit('update progress', progress)
  }
  const updateEvents = (events: Record<string, boolean>) => {
    const progress = {
      ...player.progress,
      events: { ...player.progress.events, ...events },
    }
    setPlayer({
      ...player,
      progress,
    })
    socket.emit('update progress', progress)
  }
  const addItem = (items: string[]) => {
    const inventory = [...player.inventory, ...items]
    setPlayer({ ...player, inventory })
    socket.emit('update inventory', inventory)
  }
  const removeItem = (items: string[]) => {
    const inventory = player.inventory.filter((i) => !items.includes(i))
    setPlayer({ ...player, inventory })
    socket.emit('update inventory', inventory)
  }
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
          <Route
            path="/loc/"
            element={
              <Frame socket={socket} player={player} setPlayer={setPlayer} />
            }
          >
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
              element={
                <Salon
                  player={player}
                  updateEvents={updateEvents}
                  socket={socket}
                />
              }
            />
            <Route
              path="church"
              element={<Church player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="item-shop"
              element={<ItemShop player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="docks"
              element={<Docks player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="town-entrance"
              element={<TownEntrance player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="adventurer-camp"
              element={<AdventurerCamp player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="quarry"
              element={<Quarry player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="woods"
              element={<Woods player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="castle"
              element={<Castle player={player} setPlayer={setPlayer} />}
            />
            <Route
              path="cave"
              element={<Cave player={player} setPlayer={setPlayer} />}
            />
          </Route>
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
