function NewPlayer() {
  return (
    <>
      <div className="add-player">
        <h2>Please create your character</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td className="ui header">Name</td>
                <td>
                  <input type="text" placeholder="Name" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default NewPlayer
