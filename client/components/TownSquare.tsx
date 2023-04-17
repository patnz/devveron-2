import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function TownSquare({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Metellicana Town Square</h2>
      </div>
      {/* <div className="first-load">
        <p>
          You slowly wake up outside a tavern in an unknown world, its a warm
          night and you appear to be in the middle of a bustling town.
        </p>
      </div> */}
      <div className="location-content-container">
        <p>
          You see a group of dimly lit buildings around a central fountain. You
          can see a{' '}
          <Link to="/loc/tavern" className="link">
            Tavern
          </Link>
          , a{' '}
          <Link to="/loc/salon" className="link">
            Salon
          </Link>
          , a [Church] and a [Item Shop] among the buildings. There is a [Road]
          off to the side which leads down to the Docks and Slum area, and
          behind you is the road leading [Out of Town]
        </p>
        <p>{player.location}</p>
      </div>
    </>
  )
}

export default TownSquare
