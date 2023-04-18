import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'

interface Props {
  player: Player
  addItems: (items: string[]) => void
}

function Woods({ player, addItems }: Props) {
  const [haveGloves, sethaveGloves] = useState()

  const getGloves = useCallback(() => {
    addItems(['UFC Gloves'])
    alert('You picked up a pair of UFC Gloves.')
  }, [addItems])

  return (
    <>
      <div className="location-name">
        <h2>Wild Woods</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Wild Woods. Here you will find a merry band of
          facilitators who lounge about
          <Link to="/loc/town-entrance" className="link">
            Town Entrance
          </Link>
          .
        </p>
        {!player.inventory.includes('UFC Gloves') && (
          <button onClick={getGloves}>What&apos;s that on the ground?</button>
        )}
      </div>
    </>
  )
}

export default Woods
