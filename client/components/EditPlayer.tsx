import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
// import { Socket } from 'socket.io-client'
import { Player } from '../../models/player'

interface Props {
  // socket: Socket
  player: Player
  setPlayer: Function
}

//please note we have removed socket as an argument within the destructured object
function EditPlayer({ player, setPlayer }: Props) {
  // const dispatch = useAppDispatch()
  const [editFormData, setEditFormData] = useState({
    char_name: player.char_name,
    pronouns: player.pronouns,
    description: player.description,
  })
  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    // Add call to action for Editing the Player here. Don't forget to pass the OAuth ID as user!
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditFormData({ ...editFormData, [e.target.id]: e.target.value })
  }
  return (
    <>
      <div className="edit-player">
        <h2>Please update your character here</h2>
        <form onSubmit={clickHandler} className="edit-player-form">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="char_name">Character Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="char_name"
                    name="char_name"
                    onChange={changeHandler}
                    value={editFormData.char_name}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="pronouns">Pronouns: </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="pronouns"
                    name="pronouns"
                    onChange={changeHandler}
                    value={editFormData.pronouns}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">Character Description: </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={changeHandler}
                    value={editFormData.description}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="edit-player-button">Update Player</button>
        </form>
      </div>
    </>
  )
}

export default EditPlayer
