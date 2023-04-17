import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Salon({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Salon</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Salon, where you can change your character attributes
          in the{' '}
          <Link to="/update" className="link">
            Magic Mirror
          </Link>
          . Behind you is the door leading you back to the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
          <Link to="/update" className="link">
            Magic Mirror
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Salon
