import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Castle({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Laputa Castle</h2>
      </div>
      <div className="location-content-container">
        <p>
          You look up at a fantasy castle - the gates are wide open, and
          it&apos;s a lovely sunny day, birds are chirping, flowers are in bloom
          and the trees have all of their leaves. It feels like a summer palace.
          The road behind you leads back to the{' '}
          <Link to="/loc/woods" className="link">
            Woods
          </Link>
          .
        </p>
        <p>
          There is a fugure at the front gates - A Vampire! He gestures to you
          not to worry and beckons you over for a chat.
        </p>
        <p>
          &ldquo;Hello there! My name is Gerard the Good. Has Mayor Kelly sent
          you to form a alliance with the town? I am happy to oblige, but I need
          to make sure there is more than one person interested in proposing
          this alliance.&rdquo;
        </p>
      </div>
    </>
  )
}

export default Castle
