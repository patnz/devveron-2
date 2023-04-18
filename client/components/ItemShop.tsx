import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addGold: (gold: number) => void
  addItems: (item: string[]) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function ItemShop({
  player,
  setPlayer,
  addGold,
  addItems,
  updateEvents,
}: Props) {
  //list of items for sale in the Item Store
  const getZeldaSword = useCallback(() => {
    addItems(['Zelda Sword'])
    updateEvents({ foundZsword: true })
    addGold(-120)
  }, [addItems, updateEvents, addGold])

  const getCurlyBrace = useCallback(() => {
    addItems(['Curly Brace'])
    updateEvents({ foundBrace: true })
    addGold(-50)
  }, [addItems, updateEvents, addGold])

  const getHealingWater = useCallback(() => {
    addItems(['Healing Water'])
    addGold(-5)
  }, [addItems, addGold])

  const getExplosives = useCallback(() => {
    addItems(['Explosives'])
    addGold(-30)
  }, [addItems, addGold])

  const donateMoneyToChurchOfWhare = useCallback(() => {
    addGold(-5)
  }, [addGold])

  return (
    <>
      <div className="location-name">
        <h2>The Redux Store</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Redux Store! We GET and SEND things from our warehouse
          and wait for things to get to us through our teams of ACTIONS and
          REDUCERS so that you do not have to wait! Come query our list items!
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
        <button onClick={getZeldaSword}>
          Buy the Mythical Zelda Sword for 120 gold
        </button>

        <button onClick={getCurlyBrace}>Buy Curly Brace for 50 gold</button>

        <button onClick={getHealingWater}>Buy Healing Water for 5 gold</button>

        <button onClick={getHealingWater}>Buy Healing Water for 5 gold</button>

        <button onClick={getExplosives}>Buy Explosives for 30 gold</button>

        <button onClick={donateMoneyToChurchOfWhare}>
          Donate 5 gold to the Church{' '}
        </button>
      </div>
    </>
  )
}

export default ItemShop
