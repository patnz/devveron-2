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
        <img
          src="https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=620&quality=45&dpr=2&s=none"
          alt="cute-kitten"
        />
      </div>
    </>
  )
}

export default Cave
