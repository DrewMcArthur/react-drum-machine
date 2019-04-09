import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Kick from './sounds/Kick';

class App extends React.Component
{
  public render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Drum Machine</h1>
        </header>
        <p className="App-intro">
          To get started, click the button to play a sound.
        </p>
        <Kick />
      </div>
    );
  }
}

export default App;
