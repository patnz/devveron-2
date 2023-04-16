import { Socket } from 'socket.io-client'
import { useState } from 'react'

interface Props {
  socket: Socket
}

interface Tile {
  p: '' | '⚪' | '⚫'
  cb: null | (() => void)
}

type TurnState = 'OPPONENTS' | 'SELECT PIECE' | 'PLACE PIECE' | 'CAPTURE PIECE'

export default function Morris({ socket }: Props) {
  const [board, setBoard] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 8 }, () => ({ p: '', cb: null } as Tile))
    )
  )
  const [colour, setColour] = useState('⚪' as '⚪' | '⚫')
  const [turnState, setTurnState] = useState('OPPONENTS' as TurnState)
  const [phase, setPhase] = useState(0)
  const [pieces, setPieces] = useState(9)
  const [activePiece, setActivePiece] = useState(
    undefined as undefined | [number, number]
  )

  switch (turnState) {
    case 'SELECT PIECE':
      board.forEach((ring, i) =>
        ring.forEach((tile, j) => {
          if (tile.p === colour) {
            if (
              phase === 3 ||
              ring[(j + 1) % 8].p === '' ||
              ring[(j + 7) % 8].p === '' ||
              (j % 2 === 1 &&
                ((i > 0 && board[i - 1][j].p === '') ||
                  (i < 2 && board[i + 1][j].p === '')))
            ) {
              tile.cb = () => {
                setActivePiece([i, j])
                setTurnState('PLACE PIECE')
              }
            }
          }
        })
      )
      break
    case 'PLACE PIECE':
      if (phase === 2) {
      } else {
        board.forEach((ring, i) =>
          ring.forEach((tile, j) => {
            if (tile.p === '') {
              if (activePiece) {
              }
            }
          })
        )
      }
  }

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

function swap(
  board: Tile[][],
  [i0, j0]: [number, number],
  [i1, j1]: [number, number]
): Tile[][] {}
