import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function TownEntrance({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The City Gates</h2>
      </div>
      <div className="location-content-container">
        <p>
          You stand at the gates of a bustling medieval town. There is a merry
          little{' '}
          <Link to="/loc/adventurer-camp" className="link">
            Adventurer Camp
          </Link>{' '}
          just outside the walls of the town, and there is a quaint little{' '}
          <Link to="/loc/quarry" className="link">
            Rock Quarry
          </Link>{' '}
          off to the side. Just within sight of the entrance you can see the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>{' '}
          and when you look the other direction away from the city you can see
          some{' '}
          <Link to="/loc/woods" className="link">
            Woods
          </Link>{' '}
          with a path leading into them.
        </p>
        <p>
          The guard looks at you grumpily and tells you to stop loitering around
          and go somewhere. She wants to clean the entryway soon and needs you
          to move out of the way.
        </p>
      </div>
    </>
  )
}

export default TownEntrance
