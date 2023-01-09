import React from 'react';
import logo from './logo.svg';
import './App.css'
import {ItemList} from "./components/list";


function App() {
    const itemPull = [
        {name: 'chaos orb', price: 1, effect:'description', currency: true},
        {name: 'exalted orb', price: 20, effect:'description', currency: true},
        {name: 'divine orb', price: 240, effect:'description', currency: true},
        {name: 'fusing orb', price: 0.25, effect:'description', currency: true},
        {name: 'gemcluence prisme', price: 30, effect:'description', currency: true},
    ]



  return (
    <div className="App">
        <ItemList title={'HeroPull List Title'} heroPull={itemPull}/>
    </div>
  );
}

export default App;
