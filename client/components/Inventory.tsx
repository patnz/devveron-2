import { Player } from '../../models/player'

interface Props {
  player: Player
}

function Inventory({ player }: Props) {
  return (
    <>
      <div className="inventory-container">
        <details>
          <summary>Inventory</summary>
          <ul>
            <li>Gold: 20</li>
            <li>Rotten Apple</li>
            <li>Ashes</li>
          </ul>
        </details>
      </div>
    </>
  )
}

export default Inventory

// OLD INVENTORY SETUP

{
  /* <h2>Inventory</h2>
        <div className="row">
          <div className="column inventory-title">
            <p>Gold</p>
            <p>Inventory</p>
          </div>
          <div className="column">
            <p>{player.gold}</p>
            {player.inventory?.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div> */
}
