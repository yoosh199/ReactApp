import React from 'react';
import {sum} from './Math';

import Header from './components/Header';
import './App.css';


function App() {
  console.log(sum);
  const cityName = "Seoul";
  return (
    <div className="App">
      <Header cityName= {cityName} />
      <p> Hello </p>
    </div>
  );
}

export default App;
