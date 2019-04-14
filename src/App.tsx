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
import Track from './components/Track';
import NoteMap from './components/NoteMap';

interface IAppState
{
  synth: any,
  trackStates: boolean[],
  trackNotes: boolean[][],
  // tracks: JSX.Element[],
  trackClasses: (typeof Instrument)[],
  loopPlaying: boolean,
  noteMap: any
}

class App extends React.Component<{}, IAppState>
{
  loopPlayer: any;
  constructor(props: {})
  {
    super(props)

    const trackInstruments = [ Kick, Snare, Hihats, Lead, Chords ]
    // const trackElements = trackInstruments.map(
    //   (el: typeof Instrument, index: number) =>
    //     React.createElement(el,
    //       {
    //         key: index,
    //         id: index,
    //         stateToggle: () => this.toggleTrackState(index),
    //         isPlaying: true,
    //         loopPlaying: false,
    //         updateGrid: (grid: any) => { this.updateGrid(index, grid) },
    //         noteMap: null
    //       }))

    this.state = {
      synth: new Tone.PluckSynth().toMaster(),
      trackStates: [ true, true, true, true, true ],
      trackClasses: trackInstruments,
      // tracks: trackElements,
      trackNotes: [],
      loopPlaying: false,
      noteMap: new NoteMap()
    }

    console.log("App notemap says: " + this.state.noteMap.get(0, 0))

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

  public updateGrid (index: number, grid: any)
  {
    const notes = this.state.trackNotes
    notes[ index ] = grid
    this.setState({
      trackNotes: notes
    })
  }

  public togglePlayLoop ()
  {
    this.setState((prevState) => { return { loopPlaying: !prevState.loopPlaying } })
  }

  public render ()
  {
    const trackElements = this.state.trackClasses.map(
      (el: typeof Instrument, index: number) =>
        React.createElement(el,
          {
            key: index,
            id: index,
            stateToggle: () => this.toggleTrackState(index),
            isPlaying: this.state.trackStates[ index ],
            loopPlaying: this.state.loopPlaying,
            updateGrid: (grid: any) => { this.updateGrid(index, grid) },
            noteMap: this.state.noteMap
          }))
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
            instruments={trackElements}
            noteMap={this.state.noteMap}
            grid={this.state.trackNotes} />

        </header>
        <main>
          <div className='Tracks'>
            {
              trackElements.map((E: JSX.Element, index: number) =>
              {
                return <Track key={index}>{E}</Track>
              })}
          </ div>
        </main>
      </div>
    )
  }
}

export default App
