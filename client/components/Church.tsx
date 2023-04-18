import { useState } from 'react'
import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Church({ player, setPlayer }: Props) {
  const [contentStage, setContentStage] = useState(0)

  const handleClickNext = () => {
    if (contentStage < 3) {
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
        <h2>The Whare Tapa Wha</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="church-content-1 typewriter">
              You arrive at the Church and are struck by the solemnity of the
              space. The patrons look lively and healthy and the space invites
              any weary traveller to medidate deeply on the nature of life and
              the skills required to go through the world of Devveron...
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}
        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="church-content-2 typewriter">
              The Church has four walls holding up the roof of the whare. They
              are strong and have deep foundations that are secure and safe.
              Upon the altar one sees Brother Joseph giving a lecture. He spots
              you and talks to you directly...
            </p>

            <p className="player-quote">Brother Joseph:</p>
            <p className="npc-quote">
              <span className="quote-icon">➶ </span> "Hello traveller and
              welcome to the Church of Te Whare Tapa Wha! Here we teach you the
              skills needed to be able to navigate and survive the at times
              stressful world of Devveron."
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 2 && (
          <div className="location-content typerwriter">
            <p className="church-content-3 typewriter">
              <p className="player-quote">Brother Joseph:</p>
              <p className="npc-quote">
                <span className="quote-icon">➶ </span> "We <i>ASK</i> of you
                that when you speak here, that you be actionable, specific and
                kind with those around you. I would love to give you a quest,
                should you wish to take it up?"...
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
            <p className="church-content-4 typewriter">
              <p className="player-quote">Brother Joseph:</p>
              <p className="npc-quote">
                <span className="quote-icon">➶ </span>"Should you take on this
                quest, the experience received will stand you in good stead for
                any future journey you may have going forward in the world of
                Devveron."
              </p>
            </p>

            <p className="church-content-4 typewriter">
              Go back to the{' '}
              <Link to="/loc/town-square" className="link">
                Town Square
              </Link>
              .
            </p>

            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
  return (
    <>
      <div className="location-content-container">
        <p>
          "Go back to the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Church
