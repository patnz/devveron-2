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
        <div className="location-content typerwriter">
          You see a group of dimly lit buildings around a central fountain. You
          can see a{' '}
          <Link to="/loc/tavern" className="link">
            Tavern
          </Link>
          , a{' '}
          <Link to="/loc/salon" className="link">
            Salon
          </Link>
          , a{' '}
          <Link to="/loc/church" className="link">
            Church
          </Link>{' '}
          and a{' '}
          <Link to="/loc/item-shop" className="link">
            Item Shop
          </Link>{' '}
          among the buildings. There is a{' '}
          <Link to="/loc/docks" className="link">
            Road
          </Link>{' '}
          off to the side which leads down to the Docks area, and behind you is
          the road leading back to the{' '}
          <Link to="/loc/town-entrance" className="link">
            Town Entrance
          </Link>{' '}
          .
          <p>
            A lowly street urchin appears… Street Urchin Pat: “Welcome fellow
            traveller, to our land of Devveron” “You look a little lost and
            confused right now but be sure that you are in a safe place.” “There
            are many things to see and learn about in Devveron so please have a
            look about And have an adventure!” “If you have the time, traveller
            - you ought to go to the Docks and see my friend Mayor Kelly. Should
            you go see them, I would really appreciate you deliver them a
            package consisting of a Lego set of the Millenium Falcon. The Mayor
            has been hiding Lego stashes around the world of Devveron so if you
            find any further Lego, please deliver it to the Mayor for a nice
            gold reward!”
          </p>
        </div>
        {/* <p>{player.location}</p> */}
      </div>
    </>
  )
}

export default TownSquare
