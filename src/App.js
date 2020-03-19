import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="AUD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="AUD"></Conversor>
      </div>
    </div>
  );
}

export default App;
