import { Outlet } from 'react-router-dom'
import Header from './Header'
import PlayersHere from './PlayersHere'
import Chat from './Chat'

export default function Frame() {
  return (
    <>
      <Header />
      <Outlet />
      <PlayersHere />
      <Chat />
    </>
  )
}
