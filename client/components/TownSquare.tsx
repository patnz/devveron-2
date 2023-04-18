import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function TownSquare({ player, setPlayer }: Props) {
  const [contentStage, setContentStage] = useState(0)

  const handleClick = () => {
    if (contentStage < 2) {
      setContentStage(contentStage + 1)
    }
  }
  return (
    <>
      <div className="location-name">
        <h2>Metellicana Town Square</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-1 typewriter">
              You see a group of dimly lit buildings around a central fountain.
              A lowly street urchin appears… Street Urchin Pat: “Welcome fellow
              traveller, to our land of Devveron” “You look a little lost and
              confused right now but be sure that you are in a safe place.”
              “There are many things to see and learn about in Devveron so
              please have a look about And have an adventure!” “If you have the
              time, traveller - you ought to go to the Docks and see my friend
              Mayor Kelly.
            </p>
            <button className="next-content-button" onClick={handleClick}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-2 typewriter">
              Should you go see them, I would really appreciate you deliver them
              a package consisting of a Lego set of the Millenium Falcon. The
              Mayor has been hiding Lego stashes around the world of Devveron so
              if you find any further Lego, please deliver it to the Mayor for a
              nice gold reward!”
            </p>
            <button className="next-content-button" onClick={handleClick}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 2 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-3 typewriter">
              You can see a{' '}
              <Link to="/loc/tavern" className="link">
                Tavern
              </Link>
              , a{' '}
              <Link to="/loc/salon" className="link">
                Salon
              </Link>
              , a [Church] and a [Item Shop] among the buildings. There is a
              [Road] off to the side which leads down to the Docks and Slum
              area, and behind you is the road leading [Out of Town]
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default TownSquare
