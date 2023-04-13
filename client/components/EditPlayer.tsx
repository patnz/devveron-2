function EditPlayer() {
  return (
    <>
      <div className="edit-player">
        <h2>You can change your character here</h2>
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

export default EditPlayer
