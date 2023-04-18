import { Player } from '../../models/player'

interface Props {
  player: Player
}

function Inventory({ player }: Props) {
  return (
    <>
      <div className="inventory-container">
        <details className="inventory-details">
          <summary>Inventory</summary>
          <ul className="inventory-list">
            <li className="inventory-item">Gold: {player.gold}</li>
            {player.inventory &&
              player.inventory.map((item) => (
                <li className="inventory-item" key={item}>
                  {item}
                </li>
              ))}
          </ul>
        </details>
      </div>
    </>
  )
}

export default Inventory
