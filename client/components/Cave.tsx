import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Cave({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Kitty Cat Cave</h2>
      </div>
      <div className="location-content-container">
        <p>
        &#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;
        </p>
        <p>
          Welcome to the Kitty Cat Cave! The cutest place in all the land -
          there are hundreds of kittens in this cave, all super friendly and
          happy. The local hunters keep the cats fed, and the local children
          come and play with the kittens on a regular basis. Behind you is the
          road leading back to the{' '}
          <Link to="/loc/woods" className="link">
            Woods
          </Link>
          .
        </p>
        <p>
          &#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;&#x1f43e;
          </p>
      </div>
    </>
  )
}

export default Cave
