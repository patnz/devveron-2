import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function TownEntrance({ player, setPlayer }: Props) {
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
        <h2>The City Gates</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <p className="gates-content-1 typewriter">
              You stand at the gates of a bustling medieval town.
            </p>
            <p className="gates-content-1 typewriter">
              The guard looks at you grumpily and tells you to stop loitering
              around and go somewhere. She waves her spear in your direction and
              insists you clear out soon.
            </p>
            <p className="gates-content-1 typewriter">
              Just within sight of the entrance you can see the{' '}
              <Link to="/loc/town-square" className="link">
                Town Square
              </Link>
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}
        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="gates-content-1 typewriter">
              Where do you want to go?
            </p>
            <p>
              <span className="quote-icon">➶</span> A merry little{' '}
              <Link to="/loc/adventurer-camp" className="link">
                Adventurer Camp
              </Link>{' '}
              just outside the walls of the town could be a good direction to
              head in
            </p>
            <p>
              <span className="quote-icon">➶</span> Perhaps you could find
              something interesting to do at the{' '}
              <Link to="/loc/quarry" className="link">
                Rock Quarry
              </Link>{' '}
            </p>
            <p>
              <span className="quote-icon">➶</span> In the other direction, away
              from the city, you can see some{' '}
              <Link to="/loc/woods" className="link">
                Woods
              </Link>{' '}
              with a path leading into them
            </p>

            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default TownEntrance
