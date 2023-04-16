import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { Socket } from 'socket.io-client'
import { Player } from '../../models/player'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface Props {
  socket: Socket
  player: Player
  setPlayer: Function
  goto: (newlocation: string) => void
}

//please note we have removed socket as an argument within the destructured object
function EditPlayer({ socket, player, setPlayer, goto }: Props) {
  // const goSalon = () => {
  //   redirect('/salon')
  // }
  const nav = useNavigate()
  // const dispatch = useAppDispatch()
  const [editFormData, setEditFormData] = useState({
    char_name: player.char_name,
    pronouns: player.pronouns,
    description: player.description,
  })
  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    // Add call to action for Editing the Player here. Don't forget to pass the OAuth ID as user!
    player.char_name = editFormData.char_name
    player.pronouns = editFormData.pronouns
    player.description = editFormData.description
    setPlayer(player)
    if (player.user) {
      socket.emit('update character', { ...player })
    } else {
      // it shouldn't be possible to see this component w/out a primary key but we should probably signal something here
      alert('Invalid user, not updated on database.')
    }
    nav('/loc/salon')
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
