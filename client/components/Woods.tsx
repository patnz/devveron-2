import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Woods({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Wild Woods</h2>
      </div>
      <div className="location-content-container">
        <p>
          You are deep in the woods. Even though it is a sunny day, the shade
          from the trees makes it very dark. There is a crossroads and a sign
          that points down the different paths. You can go to the{' '}
          <Link to="/loc/castle" className="link">
            Castle
          </Link>
          ,{' '}
          <Link to="/loc/cave" className="link">
            Cave
          </Link>
          , or back to the{' '}
          <Link to="/loc/town-entrance" className="link">
            Town
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Woods
