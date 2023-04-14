import { Socket } from 'socket.io-client'
import { useState } from 'react'

interface Props {
  socket: Socket
}

interface Tile {
  p: '' | '⚪' | '⚫'
  cb: null | (() => void)
}

export default function Morris({ socket }: Props) {
  const [board, setBoard] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 8 }, () => ({ p: '', cb: null } as Tile))
    )
  )
  const [colour, setColour] = useState('⚪' as '⚪' | '⚫')
  const [myTurn, setMyTurn] = useState(false)
  const [phase, setPhase] = useState(0)
  const [pieces, setPieces] = useState(9)

  return (
    <div className="morris">
      {board.map((ring, i) =>
        ring.map(({ p, cb }, j) =>
          cb ? (
            <button key={`${i},${j}`} onClick={cb}>
              {p}
            </button>
          ) : (
            <div key={`${i},${j}`}>{p}</div>
          )
        )
      )}
    </div>
  )
}
