import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import PlayersHere from './PlayersHere'
import Chat from './Chat'
import Inventory from './Inventory'
import { Socket } from 'socket.io-client'
import { Player } from '../../models/player'

interface Props {
  socket: Socket
  player: Player
}

export default function Frame({ socket, player }: Props) {
  // useLocation()

  return (
    <>
      <section className="frame-container">
        {/* <Header /> */}
        <Outlet />
        <PlayersHere socket={socket} />
        <Inventory player={player} />
        <Chat socket={socket} />
      </section>
    </>
  )
}
