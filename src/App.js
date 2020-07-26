import React from 'react';
//import {sum} from './Math';
import {BrowserRouter} from 'react-router-dom';
import RouterApp from './RouterApp'
import Header from './components/Header';
import './App.css';

function App() {
  //console.log(sum);
 
  const cityName = "S11eoul";
  console.log(BrowserRouter);
  return (
    <BrowserRouter>
    <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
