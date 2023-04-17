import { Player } from '../../models/player'
import { useState } from 'react'

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
            {player.inventory &&
              player.inventory.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div> */
}
