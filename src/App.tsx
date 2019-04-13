import * as React from 'react'
import * as Tone from 'tone'

import './css/App.css'
import './css/main.css'

// instruments
import Instrument from './sounds/Instrument'
import Chords from './sounds/Chords'
import Hihats from './sounds/Hihats'
import Kick from './sounds/Kick'
import Lead from './sounds/Lead'
import Snare from './sounds/Snare'

// components
import LoopPlayer from './components/LoopPlayer';
import PlayButton from './components/PlayButton'
import Tracks from './components/Tracks'

interface IAppState
{
  synth: any,
  trackStates: boolean[],
  trackNotes: boolean[][],
  tracks: JSX.Element[],
  // trackClasses: (typeof Instrument)[],
  loopPlaying: boolean,
}

class App extends React.Component<{}, IAppState>
{
  loopPlayer: any;
  constructor(props: {})
  {
    super(props)

    const trackInstruments = [ Kick, Snare, Hihats, Lead, Chords ]
    const trackElements = trackInstruments.map(
      (el: typeof Instrument, index: number) =>
        React.createElement(el, { key: index, id: index, stateToggle: () => this.toggleTrackState(index) }))
    const tracksRendered = trackElements.map((el: JSX.Element) =>
    {
      React.render(el)
    })

    this.state = {
      synth: new Tone.PluckSynth().toMaster(),
      trackStates: [ true, true, true, true, true ],
      // trackClasses: trackInstruments,
      tracks: trackElements,
      trackNotes: [],
      loopPlaying: false
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

  public togglePlayLoop ()
  {
    this.setState((prevState) => { return { loopPlaying: !prevState.loopPlaying } })
  }

  public render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Web Audio Interface!</h1>
          <PlayButton
            isPlaying={this.state.loopPlaying}
            playFunc={() => this.togglePlayLoop()} />
          {this.loopPlayer}
          <LoopPlayer
            isPlaying={this.state.loopPlaying}
            instruments={this.state.tracks}
            grid={this.state.trackNotes} />

        </header>
        <main>
          <Tracks tracks={this.state.tracks} synth={this.state.synth} />
        </main>
      </div>
    )
  }
}

export default App
