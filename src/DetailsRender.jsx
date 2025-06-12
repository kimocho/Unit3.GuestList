const DetailsRender = ({ currentGuest, setCurrentGuest }) => {
  return (
    <ul>
      <li key={currentGuest.name}>NAME: {currentGuest.name}</li>
      <li key={currentGuest.email}>EMAIL: {currentGuest.email}</li>
      <li key={currentGuest.phone}>PHONE: {currentGuest.phone}</li>
      <li key={currentGuest.bio}>BIO: {currentGuest.bio}</li>
      <li key={currentGuest.job}>JOB: {currentGuest.job}</li>
      <button onClick={() => setCurrentGuest({})}>Back</button>
    </ul>
  )
}

export default DetailsRender;