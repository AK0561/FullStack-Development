import React from 'react';
import logo from './logo.svg';
import {useState} from 'react';

function App() {
  const [X,setX] =useState(false);
  return (
    <div class= { X ? 'dark' : '' } onClick={ () => setX(X => !X) }>
    <div className="bg-gray-200 text-green dark:bg-blue-900 dark:text- h-screen">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='dark:text-yellow-200'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    </div>
      )
}

export default App;
