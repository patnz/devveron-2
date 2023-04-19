import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { ChangeEvent, useCallback, useState } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addGold: (gold: number) => void
  removeItems: (items: string[]) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function Docks({
  player,
  setPlayer,
  removeItems,
  updateEvents,
  addGold,
}: Props) {
  const giveFalcon = useCallback(() => {
    removeItems(['Millennium Falcon'])
    addGold(40)
    updateEvents({ gaveFalcon: true })
  }, [])

  const [contentStage, setContentStage] = useState(0)
  // player.progress.events.metPat ? 3 : 0

  const handleClickNext = () => {
    if (contentStage < 3) {
      // if (contentStage === 2) {
      //   updateEvents({ metPat: true }) /// optional <------
      // }
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
        <h2>The Docks of Devveron</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="docks-content-1 typewriter">
              You arrive at the Docks and are struck by the deep blue of the
              sea, and the freshness of the ocean air. The seagulls glide and
              squawk overhead and the sailors are milling about their Ships with
              fine ales and card games. Behind you is the road leading back to
              the{' '}
              <Link to="/loc/town-square" className="link">
                Town Square
              </Link>
              .
            </p>
            <p className="docks-content-2 typewriter">
              At the corner of your eye you spy someone that looks authoritative
              but friendly!
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}
        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="player-quote">Mayor Kelly:</p>

            <p className="npc-quote">
              <span className="quote-icon">➶ </span>"Hello Traveller and welcome
              to the Docks! The route to get here must have been easy to GET to.
              We are querying with contractors about building a newer route here
              so that the people of Devveron can get things from the dock a lot
              more faster and efficiently."
            </p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span> "By chance, were you sent
              here by Pat the Street Urchin? I am wondering whether you have an
              item I had stashed at Pat's, the mythical Lego set of the
              Millenium Falcon?..”
            </p>
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 2 && (
          <div className="location-content">
            {player.progress.events.gaveFalcon ? (
              <>
                <p>You have found Kelly!</p>
                <button
                  className="back-content-button"
                  onClick={handleClickBack}
                >
                  ⬅
                </button>
              </>
            ) : (
              <>
                <p>
                  Kelly stares longingly at the Millenium Falcon Lego Set
                  perking out the top of your rucksack...
                </p>
                <button className="action-text-button" onClick={giveFalcon}>
                  Hand over Lego
                </button>
                <button
                  className="back-content-button"
                  onClick={handleClickBack}
                >
                  ⬅
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )

  return <></>
}

export default Docks
