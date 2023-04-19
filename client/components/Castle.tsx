import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  addGold: (goldDelta: number) => void
  updateEvents: (newEvents: Record<string, boolean>) => void
  removeItems: (items: string[]) => void
}

function Castle({ player, addGold, updateEvents, removeItems }: Props) {
  const giveZelda = () => {
    addGold(100)
    removeItems(['Zelda Sword'])
    updateEvents({ formedAlliance: true })
  }
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
          There is a figure at the front gates - A Vampire! He gestures to you
          not to worry and beckons you over for a chat.
        </p>

        {player.progress.events.formedAlliance ? (
          <p>
            &ldquo;Congratulations! I see you have brought the Zelda Sword with
            you. Let&apos;s feast to celebrate!&rdquo;
          </p>
        ) : player.inventory.includes('Zelda Sword') ? (
          <>
            <p className="npc-quote">You found the Zelda Sword!</p>
            <button className="action-text-button" onClick={giveZelda}>
              Give Gerard the Sword
            </button>
          </>
        ) : (
          <>
            <p>
              &ldquo;Hello there! My name is Gerard the Good. Has Mayor Kelly
              sent you to form a alliance with the town? I am happy to oblige,
              but I need to make sure you have brought the required item from
              the town.&rdquo;
            </p>
            <p>
              {' '}
              &ldquo;Please buy the Zelda Sword from the Redux Store in town and
              bring it to me to seal the deal.&rdquo;
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Castle
