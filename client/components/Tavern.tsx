import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

interface Props {
  player: Player
  removeItems: (items: string[]) => void
  addGold: (gold: number) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function Tavern({ player, removeItems, addGold, updateEvents }: Props) {
  const giveClub = useCallback(() => {
    removeItems(['Nine Iron'])
    addGold(8)
    updateEvents({ gaveJoshClub: true })
  }, [])
  return (
    <>
      <div className="location-name">
        <h2>The Wild Wanderer Tavern</h2>
      </div>
      <div className="location-content-container typewriter">
        <p>
          You walk into a brightly lit Tavern, there is a warm fire in the
          hearth and drinks flow freely. The [Barkeeper] looks your way and
          greets you warmly, the [Waitress] heads towards you to take your
          order, there is a [Thug] lurking by the stairs and a [Merchant] sits
          at a window seat with many empty glasses in front of him. Behind you
          is the door leading out to the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
        <p>
          Further down along you see a straggly Pirate who looks like he has
          been out on sea for a long time. He has a luscious flowing beard and a
          mane that belies a man of great adventure and joy. Peg legged, he has
          a putting golf club for a foot.
        </p>
        <p className="player-quote">Pirate Josh:</p>
        {player.progress.events.gaveJoshClub ? (
          <p className="npc-quote">
            Thank you for finding my Nine Iron for me!
          </p>
        ) : player.inventory.includes('Nine Iron') ? (
          <>
            <p className="npc-quote">You found it!</p>
            <button className="action-text-button" onClick={giveClub}>
              Give Josh his club
            </button>
          </>
        ) : (
          <p className="npc-quote">
            Argggggggggghhhhhh me mateyyyy, whatch brings u here to this fine
            Taaaavern!!!!!? I am here in the Tavern resting before I go out
            again to hang out with me mateys out on the Golf Course. Did I tell
            you I love Golf? Unfortunately, I got super steamed yesterday and
            have lost my favourite Nine Iron club somewhere in the woods
            perhaps? and was wondering if you could possibly locate it and
            return it to me! I may have left it at the Town Entrance but I am
            not so sure? Can you please help?
          </p>
        )}
      </div>
    </>
  )
}

export default Tavern
