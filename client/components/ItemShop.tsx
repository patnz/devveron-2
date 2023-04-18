import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addGold: (gold: number) => void
  addItems: (item: string) => void
}

function ItemShop({ player, setPlayer, addGold, addItems }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Redux Store</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Redux Store! We GET and SEND things from our warehouse
          and wait for things to get to us through our teams of ACTIONS and
          REDUCERS so that you do not have to wait!
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default ItemShop
