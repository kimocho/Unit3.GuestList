import { useState, useEffect } from 'react';
import DetailsRender from './DetailsRender.jsx';
import TableGuests from './TableGuests.jsx'

export default function App() {
  const [currentGuest, setCurrentGuest] = useState({});
  const [wholeData, setCurrentData] = useState([]);

  useEffect(() => {
    const getting = async () => {
      const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/guests');
      const responseJson = await response.json();
      setCurrentData(responseJson.data);
    }
    getting();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      {
        (!currentGuest.name)
          ?
          <TableGuests wholeData={wholeData} setCurrentGuest={setCurrentGuest} />
          :
          <DetailsRender currentGuest={currentGuest} setCurrentGuest={setCurrentGuest} />
      }
    </>
  )
}
