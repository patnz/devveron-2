import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addGold: (gold: number) => void
}

function Quarry({ player, setPlayer, addGold }: Props) {
  const [contentStage, setContentStage] = useState(0)
  // player.progress.events.metPat ? 3 : 0

  const handleClickNext = () => {
    if (contentStage < 1) {
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
        <h2>The Menhir Den</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="quarry-content-1 typewriter">
              You see an giant of a man walking around and hefting rocks with
              his bare hands...
            </p>
            <p className="player-quote">Quarryman:</p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span>
              "Welcome to the Quarry!"
            </p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span>
              "We mine rocks here! There are plenty of pickaxes lying around the
              place. You can keep anything you find!"
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}
        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="quarry-content-2 typewriter">
              There is a pickaxe leaning against a mine cart full of rocks
              nearby. The surface of the mine wall appears to be shimmering.
            </p>
            <p className="quarry-content-3 typewriter">
              Behind you is the road back to the{' '}
              <Link to="/loc/town-entrance" className="link">
                Town Entrance
              </Link>
              .
            </p>
            <Link to="/loc/quarry" className="link">
              <button className="action-text-button" onClick={() => addGold(5)}>
                Hack away at the shimmering rockface
              </button>
            </Link>

            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Quarry
