import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Church({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Whare Tapa Wha</h2>
      </div>
      <div className="location-content-container">
        <p>
          You arrive at the Church and are struck by the solemnity of the space.
          The patrons look lively and healthy and the space invites any weary
          traveller to medidate deeply on the nature of life and the skills
          required to go through the world of Devveron. The Church has four
          walls holding up the roof of the whare. They are strong and have deep
          foundations that are secure and safe. Upon the altar one sees Brother
          Joseph giving a lecture. He spots you and talks to you directly.
          Brother Joseph: &ldquot;Hello traveller and welcome to the Church of
          Te Whare Tapa Wha! Here we teach you the skills needed to be able to
          navigate and survive the at times stressful world of Devveron. We ASK
          of you that when you speak here, that you be actionable, specific and
          kind with those around you. I would love to give you a quest, should
          you wish to take it up? Can you please take this healing body of water
          to my friend Patch? To achieve this objective, one will need to have
          strong Integrity, Kindness and Effort. Should you take on this quest,
          the experience received will stand you in good stead for any future
          journey you may have going forward in the world of Devveron.&rdquot;
          <Link to="/loc/docks" className="link">
            Docks
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Church
