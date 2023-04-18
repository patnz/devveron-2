import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function ItemShop({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Redux Store</h2>
      </div>
      <div className="location-content-container">
        <p>
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
