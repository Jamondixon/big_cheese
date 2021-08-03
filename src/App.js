import { useEffect, useState } from 'react'

import './App.css';
import QuesoContainer from './QuesoContainer';


function App() {

  const [quesos, setQuesos] = useState([])

  const getQuesos = () => {
    fetch('http://localhost:3000/quesos')
    .then(response => response.json())
    .then(quesos => setQuesos(quesos))
}

  useEffect(getQuesos, [])


  return (
    <div className="App">
      <QuesoContainer quesos={quesos}/>
    </div>
  );
}

export default App;
