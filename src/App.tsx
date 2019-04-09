import * as React from 'react'
import * as Tone from 'tone'
import './App.css'

import logo from './logo.svg'

// instruments
import Kick from './sounds/Kick'
import Snare from './sounds/Snare'
import Hihats from './sounds/Hihats'
import Lead from './sounds/Lead'
import Chords from './sounds/Chords'

// components
import Tracks from './components/Tracks'
import Soundboard from './components/Soundboard'

class App extends React.Component
{
  synth = new Tone.PluckSynth().toMaster()
  tracks: JSX.Element[] = [
    <Kick synth={this.synth} />,
    <Snare synth={this.synth} />,
    <Hihats synth={this.synth} />,
    <Lead synth={this.synth} />,
    <Chords synth={this.synth} />,
  ]

  public render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Web Audio Interface!</h1>
        </header>
        <main>
          <Tracks tracks={this.tracks} synth={this.synth} />
          <Soundboard bars={4} beats={4} tracks={this.tracks} />
        </main>
      </div>
    )
  }
}

export default App
