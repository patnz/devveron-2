import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import PlayersHere from './PlayersHere'
import Chat from './Chat'
import { Socket } from 'socket.io-client'

interface Props {
  socket: Socket
}

export default function Frame({ socket }: Props) {
  // useLocation()

  return (
    <>
      <section className="frame-container">
        {/* <Header /> */}
        <Outlet />
        <PlayersHere socket={socket} />
        <Chat socket={socket} />
      </section>
    </>
  )
}
