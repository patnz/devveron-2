import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  player: Player
  // updateEvents: (events: Record<string, boolean>) => void
  setPlayer: (player: Player) => void
}

function Template({ player, setPlayer }: Props) {
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
        <h2>LOCATION NAME</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-1 typewriter">main content...</p>

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
              "npc quote..."
            </p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span>"npc quote..."
            </p>

            <p className="npc-quote">
              <span className="quote-icon">➶ </span>"npc quote..."
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
                <span className="quote-icon">➶ </span> "npc quote..."
              </p>

              <p className="npc-quote">
                <span className="quote-icon">➶ </span> "npc quote...”
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
              main content here...
            </p>
            {/* <button
              className="action-text-button"
              onClick={() => setContentStage(1)}
            >
              Talk to someone... <-------------- OPTIONAL
            </button> */}
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Template
