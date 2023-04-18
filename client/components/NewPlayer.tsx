import { useAuth0 } from '@auth0/auth0-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Socket } from 'socket.io-client'
import { useAppDispatch } from '../hooks/redux'

interface Props {
  socket: Socket
}

function NewPlayer({ socket }: Props) {
  const { user } = useAuth0()
  // const dispatch = useAppDispatch()
  // Note: user is the OAuth key pulled from OAuth, and won't need to change.
  const [addFormData, setAddFormData] = useState({
    char_name: 'Bob Jones',
    pronouns: 'they/them',
    description: 'A Normal Human',
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    // Add call to action for Adding the Player here. Don't forget to pass the OAuth ID as user!
    if (user) {
      socket.emit('create character', { user: user.sub, ...addFormData })
    } else {
      // it shouldn't be possible to see this component w/out being logged in, but we should probably signal something here
      alert('You are not logged in, how did you get here?')
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value })
  }

  return (
    <>
      <div className="new-player-container">
        <h2>Please create your character</h2>
        <form onSubmit={submitHandler} className="new-player-form">
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
                    value={addFormData.char_name}
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
                    value={addFormData.pronouns}
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
                    value={addFormData.description}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="new-player-button">Add Player</button>
        </form>
      </div>
    </>
  )
}

export default NewPlayer
