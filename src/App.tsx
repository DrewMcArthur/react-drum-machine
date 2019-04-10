import * as React from 'react'
import * as Tone from 'tone'

import './css/App.css'
import './css/main.css'

// instruments
import Chords from './sounds/Chords'
import Hihats from './sounds/Hihats'
import Kick from './sounds/Kick'
import Lead from './sounds/Lead'
import Snare from './sounds/Snare'

// components
import Soundboard from './components/Soundboard'
import Tracks from './components/Tracks'
import Instrument from './sounds/Instrument';

interface IAppState
{
  synth: any,
  trackStates: boolean[],
  tracks: JSX.Element[],
}

class App extends React.Component<{}, IAppState>
{
  constructor(props: {})
  {
    super(props)

    this.state = {
      synth: new Tone.PluckSynth().toMaster(),
      trackStates: [ true, true, true, true, true ],
      tracks: [ Kick, Snare, Hihats, Lead, Chords ].map(
        (el: typeof Instrument, index: number) =>
          React.createElement(el, { key: index, stateToggle: () => this.toggleTrackState(index) }))

    }

    this.toggleTrackState = this.toggleTrackState.bind(this)
    this.getTrackState = this.getTrackState.bind(this)
    this.setTrackState = this.setTrackState.bind(this)
  }

  public toggleTrackState (index: number)
  {
    const newState = !this.getTrackState(index)
    this.setTrackState(index, newState)
    return newState
  }

  public getTrackState (index: number)
  {
    return this.state.trackStates[ index ]
  }

  public setTrackState (index: number, state: boolean)
  {
    const states = this.state.trackStates
    states[ index ] = state
    this.setState({
      trackStates: states
    })
  }

  public render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Web Audio Interface!</h1>
        </header>
        <main>
          <Tracks tracks={this.state.tracks} synth={this.state.synth} />
          <Soundboard bars={4} beats={4} tracks={this.state.tracks} />
        </main>
      </div>
    )
  }
}

export default App
