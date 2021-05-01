import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [view, setView] = useState('main');

  return (
    <div className="App">

      {view && view === 'app' &&
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <h1>Welcome to Beespeller!</h1>
          <p>Beespeller is an app that will help you learn how to spell in a fun way!</p>
          <button onClick={()=>setView('main')}>Click here to get started</button>
        </div>
      }
      { view && view === 'main' && <Main/> }

    </div>
  );
}

export default App;
