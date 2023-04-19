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
  const [inventory, setInventory] = useState([] as string[])
  const [quests, setQuests] = useState({} as Record<string, number>)
  const [events, setEvents] = useState({} as Record<string, boolean>)
  const [gold, setGold] = useState(0)
  const nav = useNavigate()

  const fullPlayer = {
    ...player,
    gold,
    inventory,
    progress: { events, quests },
  }

  const loggingOut = useCallback(() => {
    socket.emit('logging out')
  }, [])

  useEffect(() => {
    console.log(user)
    if (user) {
      socket.emit('get player data', user.sub)
    }
  }, [user])

  // socket on player logout send player obj

  socket.on('send player data', (player: Player) => {
    setPlayer(player)
    setInventory(player.inventory)
    setQuests(player.progress.quests)
    setEvents(player.progress.events)
    setGold(player.gold)
    console.log('got player data, sending to location...')
    nav(`/loc/${player.location}`)
  })
  socket.on('do character creation', () => {
    nav('/create')
  })

  // Custom functions to be passed into the components, to replace setPlayer

  const addGold = (goldDelta: number) => {
    const newGold = gold + goldDelta
    setGold(newGold)
    socket.emit('update gold', newGold)
  }

  const updateQuests = (newQuests: Record<string, number>) => {
    newQuests = { ...quests, ...newQuests }
    setQuests(newQuests)
    socket.emit('update progress', { events, quests: newQuests })
  }
  const updateEvents = (newEvents: Record<string, boolean>) => {
    newEvents = { ...events, ...newEvents }
    setEvents(newEvents)
    socket.emit('update progress', { events: newEvents, quests })
  }
  const addItems = (items: string[]) => {
    const newInventory = [...inventory, ...items]
    setInventory(newInventory)
    socket.emit('update inventory', newInventory)
  }
  const removeItems = (items: string[]) => {
    const newInventory = inventory.filter((i) => !items.includes(i))
    setInventory(newInventory)
    socket.emit('update inventory', newInventory)
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
              <Frame
                socket={socket}
                player={player}
                setPlayer={setPlayer}
                inventory={inventory}
                gold={gold}
              />
            }
          >
            <Route
              path="town-square"
              element={
                <TownSquare
                  player={fullPlayer}
                  updateEvents={updateEvents}
                  addItems={addItems}
                />
              }
            />
            <Route
              path="tavern"
              element={
                <Tavern
                  player={fullPlayer}
                  removeItems={removeItems}
                  addGold={addGold}
                  updateEvents={updateEvents}
                />
              }
            />
            <Route
              path="salon"
              element={
                <Salon
                  player={fullPlayer}
                  updateEvents={updateEvents}
                  socket={socket}
                />
              }
            />
            <Route
              path="church"
              element={<Church player={fullPlayer} setPlayer={setPlayer} />}
            />
            <Route
              path="item-shop"
              element={
                <ItemShop
                  player={fullPlayer}
                  addGold={addGold}
                  addItems={addItems}
                  updateEvents={updateEvents}
                />
              }
            />
            <Route
              path="docks"
              element={
                <Docks
                  player={fullPlayer}
                  removeItems={removeItems}
                  updateEvents={updateEvents}
                  addGold={addGold}
                />
              }
            />
            <Route
              path="town-entrance"
              element={
                <TownEntrance player={fullPlayer} setPlayer={setPlayer} />
              }
            />
            <Route
              path="adventurer-camp"
              element={
                <AdventurerCamp player={fullPlayer} setPlayer={setPlayer} />
              }
            />
            <Route
              path="quarry"
              element={
                <Quarry
                  player={fullPlayer}
                  setPlayer={setPlayer}
                  addGold={addGold}
                />
              }
            />
            <Route
              path="woods"
              element={
                <Woods
                  player={fullPlayer}
                  addItems={addItems}
                  updateEvents={updateEvents}
                />
              }
            />
            <Route
              path="castle"
              element={
                <Castle
                  player={fullPlayer}
                  addGold={addGold}
                  updateEvents={updateEvents}
                  removeItems={removeItems}
                />
              }
            />
            <Route
              path="cave"
              element={<Cave player={fullPlayer} setPlayer={setPlayer} />}
            />
          </Route>
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
