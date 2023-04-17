import { Player } from '../../models/player'

interface Props {
  player: Player
}

function Inventory({ player }: Props) {
  return (
    <>
      <div className="inventory">
        <h2>Inventory</h2>
        <div className="row">
          <div className="column inventory-title">
            <p>Gold</p>
            <p>Inventory</p>
          </div>
          <div className="column">
            <p>{player.gold}</p>
            {/* Will need to become a map in future, maybe expandable like players here list */}
            <p>{player.inventory[0]}</p>
            <p>{player.inventory[1]}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory
