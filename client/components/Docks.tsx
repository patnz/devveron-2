import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addItems: (items: string[]) => void
}

function Docks({ player, setPlayer, addItems }: Props) {
  const dockitem = 'Millenium Falcon'
  const [useNewItem, setNewItem] = useState({
    items: player.inventory,
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...useNewItem, [e.target.id]: dockitem })
  }

  return (
    <>
      <div className="location-name">
        <h2>The Docks of Devveron</h2>
      </div>
      <div className="location-content-container">
        <p>
          You arrive at the Docks and are struck by the deep blue of the sea,
          and the freshness of the ocean air. The seagulls glide and squawk
          overhead and the sailors are milling about their Ships with fine ales
          and card games. Behind you is the road leading back to the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          . At the corner of your eye you spy someone that looks authoritative
          but friendly! Mayor Kelly: &ldquo;Hello Traveller and welcome to the
          Docks! The route to get here must have been easy to GET to. We are
          querying with contractors about building a newer route here so that
          the people of Devveron can get things from the dock a lot more faster
          and efficiently. By chance, were you sent here by Pat the Street
          Urchin? I am wondering whether you have an item I had stashed at
          Pat&apos;s, the mythical Lego set of the Millenium Falcon?&rdquo;
        </p>
        <div></div>
      </div>
    </>
  )
}

export default Docks
