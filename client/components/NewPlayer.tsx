import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'

function NewPlayer() {
  const dispatch = useAppDispatch()
  // Note: user is the OAuth key pulled from OAuth, and won't need to change.
  const [addFormData, setAddFormData] = useState({
    char_name: 'Bob Jones',
    pronouns: 'they/them',
    description: 'A Normal Human',
  })

  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    // Add call to action for Adding the Player here. Don't forget to pass the OAuth ID as user!
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value })
  }

  return (
    <>
      <div className="new-player">
        <h2>Please create your character</h2>
        <form onSubmit={clickHandler} className="new-player-form">
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
