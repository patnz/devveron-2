import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import Patch from './Patch'
import { useEffect, useState } from 'react'

interface Props {
  player: Player
  updateEvents: (events: Record<string, boolean>) => void
  socket: any
}

function Salon({ player, updateEvents, socket }: Props) {
  const [mirrorUsers, setMirrorUsers] = useState([] as string[])

  useEffect(() => {
    socket.on('room state', ({ charsUsingMirror }) =>
      setMirrorUsers(charsUsingMirror)
    )
    return () => socket.off('room state')
  }, [socket])

  return (
    <>
      <div className="location-name">
        <h2>The Salon</h2>
      </div>
      <div className="location-content-container">
        <div className="location-content">
          <p>
            Welcome to the Salon! My name is Lady Shrena and this our cozy store
            I corun with my Ceramcist friend Emily. We both have bangin' taste
            in interior design and interior architecture. Next to us is a{' '}
            <Link to="/update" className="link">
              Magic Mirror
            </Link>{' '}
            on the wall.
          </p>
          <Patch player={player} updateEvents={updateEvents} />
          {mirrorUsers.length ? (
            <p>
              {mirrorUsers.slice(0, -1).join(', ') +
                (mirrorUsers.length > 1 ? ' and ' : '') +
                mirrorUsers.at(-1)}{' '}
              {mirrorUsers.length === 1 ? 'is' : 'are'} staring into the mirror.
            </p>
          ) : (
            ''
          )}
          <p>
            Behind you is the door leading you back to the{' '}
            <Link to="/loc/town-square" className="link">
              Town Square
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default Salon
