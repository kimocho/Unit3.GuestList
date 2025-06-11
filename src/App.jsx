import { useState, useEffect } from 'react';

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
      {(!currentGuest.name) ?
        <ul>
          {
            wholeData.map((elem) => (
              <li key={elem.name} onClick={() => setCurrentGuest(elem)}>NAME: {elem.name} EMAIL: {elem.email}</li>
            ))
          }
          <p>Select a guest to see more details.</p>
        </ul>
        :
        <ul>
          <li key={currentGuest.name}>NAME: {currentGuest.name}</li>
          <li key={currentGuest.email}>EMAIL: {currentGuest.email}</li>
          <li key={currentGuest.phone}>PHONE: {currentGuest.phone}</li>
          <li key={currentGuest.bio}>BIO: {currentGuest.bio}</li>
          <li key={currentGuest.job}>JOB: {currentGuest.job}</li>
          <button onClick={() => setCurrentGuest({})}>Back</button>
        </ul>
      }
    </>
  )
}
