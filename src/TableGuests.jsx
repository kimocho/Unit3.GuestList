const TableGuests = ({ wholeData, setCurrentGuest }) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td>
            {
              wholeData.map((elem) => (
                <tr key={elem.name} onClick={() => setCurrentGuest(elem)}>
                  {elem.name}
                </tr>
              ))
            }
          </td>
          <td>
            {
              wholeData.map((elem) => (
                <tr key={elem.email} onClick={() => setCurrentGuest(elem)}>
                  {elem.email}
                </tr>
              ))
            }
          </td>
          <td>
            {
              wholeData.map((elem) => (
                <tr key={elem.phone} onClick={() => setCurrentGuest(elem)}>
                  {elem.phone}
                </tr>
              ))
            }
          </td>
        </tr>
      </table>
      <p>Select a guest to see more details.</p>
    </>
  )
}

export default TableGuests;