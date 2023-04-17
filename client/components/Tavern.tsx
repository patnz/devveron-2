import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: Function
}

function Tavern({ player, setPlayer }: Props) {
  // Locations
  const goTownSquare = () => {
    player.location = 'town-square'
    setPlayer(player)
  }
  return (
    <>
      <div className="location-name">
        <h2>The Wild Wanderer Tavern</h2>
      </div>
      <div className="location-content-container">
        <p>
          You walk into a brightly lit Tavern, there is a warm fire in the
          hearth and drinks flow freely. The [Barkeeper] looks your way and
          greets you warmly, the [Waitress] heads towards you to take your
          order, there is a [Thug] lurking by the stairs and a [Merchant] sits
          at a window seat with many empty glasses in front of him. Behind you
          is the door leading out to the{' '}
          <Link to="/loc/town-square" onClick={goTownSquare} className="link">
            Town Square
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Tavern
