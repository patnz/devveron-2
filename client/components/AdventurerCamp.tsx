import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function AdventurerCamp({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Yosans Yeo Peoples</h2>
      </div>
      <div className="location-content-container">
        <p>
          You enter a merry little camp full of eccentric rogues and
          adventurers. There is a mighty bonfire in the middle, and there are
          pavillions and cooking fires scattered around. You can hear the sounds
          of laughter, chatter, and some light brawling. Behind you is the{' '}
          <Link to="/loc/town-entrance" className="link">
            Town Entrance
          </Link>
          .
        </p>
        <p>
          One of the adventurers approaches you. &ldquo;Hello! My name is Yosan
          the Rogue, welcome to my camp - we have food, drink, and fun! We help
          out the local townspeople with quests and you can trade and gamble
          with us as well.&rdquo;
        </p>
      </div>
    </>
  )
}

export default AdventurerCamp
