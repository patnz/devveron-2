import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: Function
}

function Salon({ player, setPlayer }: Props) {
  // Locations
  const goTownSquare = () => {
    player.location = 'town-square'
    setPlayer(player)
  }
  return (
    <>
      <div className="location">
        <h2>The Salon</h2>
      </div>
      <div className="entry">
        <p>
          Welcome to the Salon, where you can change your character attributes
          in the{' '}
          <Link to="/update" className="link">
            Magic Mirror
          </Link>
          . Behind you is the door leading you back to the{' '}
          <Link to="/loc/town-square" onClick={goTownSquare} className="link">
            Town Square
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Salon
