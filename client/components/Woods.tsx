import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'

interface Props {
  player: Player
  addItems: (items: string[]) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function Woods({ player, addItems, updateEvents }: Props) {
  const getClub = useCallback(() => {
    addItems(['Nine Iron'])
    updateEvents({ foundClub: true })
  }, [addItems, updateEvents])

  return (
    <>
      <div className="location-name">
        <h2>Wild Woods</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Wild Woods. There is a crossroads and a sign that
          points down the different paths. You can go to the{' '}
          <Link to="/loc/castle" className="link">
            Castle
          </Link>
          ,{' '}
          <Link to="/loc/cave" className="link">
            Cave
          </Link>
          , or back to the{' '}
          <Link to="/loc/town-entrance" className="link">
            Town
          </Link>
          . Here you will find a merry band of facilitators who lounge about
          regaling one another about the stories of code and about their trips
          into the Codespace. Here in this clearing we organize Agile Sprints
          for our daily bug hunts. A young Rogue called Yosan comes over to
          introduce herself. Yosan the Brave: &ldquo;On my recent travels into
          the outside world, I had found a mysterious 9 hole mini-golf course
          that looks like it has never seen a days worth of play. I dont think I
          have seen a monument like this ever before and truth be told, I have
          never seen a man under 30 who actively enjoyed the game of golf.
          Nevertheless, I found a mysterious tool in the clearing that looks
          like it could be useful? Perhaps an old Pirate?&rdquo;
        </p>
        {player.progress.events.foundClub ? (
          <p>You found Josh&apos;s Nine Iron here.</p>
        ) : (
          <button className="action-text-button" onClick={getClub}>
            Grab the Nine Iron Club on the ground?
          </button>
        )}
      </div>
    </>
  )
}

export default Woods
