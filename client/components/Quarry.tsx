import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addGold: (gold: number) => void
}

function Quarry({ player, setPlayer, addGold }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Menhir Den</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Quarry! We mine rocks here, you see an giant of a man
          walking around and hefting giant rocks with his bare hands. Behind you
          is the road back to the{' '}
          <Link to="/loc/town-entrance" className="link">
            Town Entrance
          </Link>
          . You see{' '}
          <Link to="/loc/quarry" onClick={() => addGold(5)} className="link">
            a glint
          </Link>{' '}
          amongst the stones.
        </p>
      </div>
    </>
  )
}

export default Quarry
