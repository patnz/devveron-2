import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  player: Player
  updateEvents: (events: Record<string, boolean>) => void
}

function TownSquare({ player, updateEvents }: Props) {
  const [contentStage, setContentStage] = useState(
    player.progress.events.metPat ? 3 : 0
  )

  const handleClickNext = () => {
    if (contentStage < 3) {
      if (contentStage === 2) {
        updateEvents({ metPat: true })
      }
      setContentStage(contentStage + 1)
    }
  }
  const handleClickBack = () => {
    if (contentStage > 0) {
      setContentStage(contentStage - 1)
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
              A lowly street urchin appears...
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}
        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="player-quote">Street Urchin Pat:</p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span>
              "Welcome fellow traveller, to our land of Devveron!
            </p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span>"You look a little lost and
              confused right now but be sure that you are in a safe place...
              There are many things to see and learn about in Devveron so please
              have a look about And have an adventure!
            </p>

            <p className="npc-quote">
              <span className="quote-icon">➶ </span>
              "If you have the time, traveller - you ought to go to the Docks
              and see my friend, Mayor Kelly...
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 2 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-2 typewriter">
              <p className="npc-quote">
                <span className="quote-icon">➶ </span> "Should you go see them,
                I would really appreciate you deliver them a package consisting
                of a Lego set of the Millenium Falcon."
              </p>

              <p className="npc-quote">
                <span className="quote-icon">➶ </span> "The Mayor has been
                hiding Lego stashes around the world of Devveron so if you find
                any further Lego, please deliver it to the Mayor for a nice gold
                reward!”
              </p>
            </p>
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 3 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-3 typewriter">
              The town square is mostly quiet, with only the scattered footsteps
              of people passing by. You can see a{' '}
              <Link to="/loc/tavern" className="link">
                Tavern
              </Link>{' '}
              on the corner, where Street Urchin Pat sits with an empty hat at
              his feet. Down an alley you can see a dim glow radiating from the{' '}
              <Link to="/loc/salon" className="link">
                Salon
              </Link>
              . The clanging of the{' '}
              <Link to="/loc/church" className="link">
                Church
              </Link>{' '}
              bells starts to ring through the square. The{' '}
              <Link to="/loc/item-shop" className="link">
                Item Shop
              </Link>{' '}
              might be a good place to find anything you might need. There is a{' '}
              <Link to="/loc/docks" className="link">
                Road
              </Link>{' '}
              off to the side which leads down to the Docks area, and behind you
              is the road leading back to the{' '}
              <Link to="/loc/town-entrance" className="link">
                Town Entrance
              </Link>{' '}
              .
            </p>
            <button
              className="action-text-button"
              onClick={() => setContentStage(1)}
            >
              Talk to Pat again
            </button>
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default TownSquare
