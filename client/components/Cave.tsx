import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Cave({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Kitty Cat Cave</h2>
      </div>
      <div className="location-content-container">
        <p>
          <Link to="/loc/woods" className="link">
            Woods
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Cave
