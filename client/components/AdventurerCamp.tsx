import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function AdventurerCamp({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Yosans Yeo Peoples</h2>
      </div>
      <div className="location-content-container">
        <p>
          <Link to="/loc/town-entrance" className="link">
            Town Entrance
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default AdventurerCamp
