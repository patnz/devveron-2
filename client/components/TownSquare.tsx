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
          <p>
            You see a group of dimly lit buildings around a central fountain. A
            lowly street urchin appears… Street Urchin Pat: “Welcome fellow
            traveller, to our land of Devveron” “You look a little lost and
            confused right now but be sure that you are in a safe place.” “There
            are many things to see and learn about in Devveron so please have a
            look about And have an adventure!” “If you have the time, traveller
            - you ought to go to the Docks and see my friend Mayor Kelly.
          </p>
          <p>
            Should you go see them, I would really appreciate you deliver them a
            package consisting of a Lego set of the Millenium Falcon. The Mayor
            has been hiding Lego stashes around the world of Devveron so if you
            find any further Lego, please deliver it to the Mayor for a nice
            gold reward!”
          </p>
          <p>
            You can see a{' '}
            <Link to="/loc/tavern" className="link">
              Tavern
            </Link>
            , a{' '}
            <Link to="/loc/salon" className="link">
              Salon
            </Link>
            , a [Church] and a [Item Shop] among the buildings. There is a
            [Road] off to the side which leads down to the Docks and Slum area,
            and behind you is the road leading [Out of Town]
          </p>
        </div>
      </div>
    </>
  )
}

export default TownSquare
