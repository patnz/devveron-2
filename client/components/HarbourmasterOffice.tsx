import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function HarbourmasterOffice({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Harbourmaster Office</h2>
      </div>
      <div className="location-content-container">
        <p>
          <Link to="/loc/docks" className="link">
            Docks
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default HarbourmasterOffice
