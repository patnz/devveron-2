import { Outlet, useLocation } from 'react-router-dom'
import PlayersHere from './PlayersHere'
import Chat from './Chat'
import Inventory from './Inventory'
import { Socket } from 'socket.io-client'
import { useEffect, useCallback } from 'react'
import { Player } from '../../models/player'

interface Props {
  socket: Socket
  player: Player
  setPlayer: (p: Player) => void
  inventory: string[]
  gold: number
}

export default function Frame({
  socket,
  player,
  setPlayer,
  inventory,
  gold,
}: Props) {
  const location = useLocation()

  const onMove = useCallback(() => {
    const loc = location.pathname.split('/')[2]
    if (loc !== player.location) {
      // console.log('moving')
      socket.emit('moving', player.location, loc)
      setPlayer({ ...player, location: loc })
    }
  }, [location, player, setPlayer, socket])

  useEffect(onMove, [onMove, location.pathname])

  return (
    <>
      <section className="frame-container">
        {/* <Header /> */}
        {player.char_name ? <Outlet /> : <p>Loading...</p>}
        <PlayersHere socket={socket} />
        <Inventory inventory={inventory} gold={gold} />
        <Chat socket={socket} />
      </section>
    </>
  )
}
