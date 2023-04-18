interface Props {
  inventory: string[]
  gold: number
}

function Inventory({ inventory, gold }: Props) {
  return (
    <>
      <div className="inventory-container">
        <details className="inventory-details">
          <summary>Inventory</summary>
          <ul className="inventory-list">
            <li className="inventory-item">${gold}</li>
            {inventory &&
              inventory.map((item) => (
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
