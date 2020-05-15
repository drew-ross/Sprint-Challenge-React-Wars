import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import Buttons from './components/Buttons';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charPage, setCharPage] = useState(1);
  const [charData, setCharData] = useState(null);
  const [error, setError] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getCharData = () => {
    axios.get(`https://swapi.py4e.com/api/people/?page=${charPage}`)
      .then(res => {
        setCharData(res.data.results);
        setError(null);
      })
      .catch(err => setError(err));
  }

  useEffect(getCharData, [charPage]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Buttons error={error} charPage={charPage} setCharPage={setCharPage} />
      {charData && charData.map(character => {
        return <Character character={character} />
      })}
    </div>
  );
}

export default App;
