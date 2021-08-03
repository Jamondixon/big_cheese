import { useEffect, useState } from 'react'

import './App.css';
import QuesoContainer from './QuesoContainer';


function App() {

  const [quesos, setQuesos] = useState([])

  const getQuesos = () => {
    fetch('http://localhost:3000/quesos')
    .then(response => response.json())
    .then(apiQuesos => setQuesos(apiQuesos))
}

  useEffect(getQuesos, [])


  return (
    <div className="App">
      <QuesoContainer />
    </div>
  );
}

export default App;
