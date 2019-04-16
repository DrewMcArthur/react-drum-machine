import * as React from 'react'
import * as Tone from 'tone'

import './css/App.css'
import './css/main.css'

// instruments
import Instrument from './sounds/Instrument'
import Kick from './sounds/Kick'
import Chords from './sounds/Chords'
import Hihats from './sounds/Hihats'
import Lead from './sounds/Lead'
import Snare from './sounds/Snare'
import Clap from './sounds/Clap'
import OpenHats from './sounds/OpenHats'
import Crash from './sounds/Crash'
import Percs from './sounds/Percs'

// components
import PlayButton from './components/PlayButton'
import Track from './components/Track';
import NoteMap from './components/NoteMap';
import LoopPlayer from './components/LoopPlayer';
import Sub from './sounds/Sub';

interface IAppState
{
  trackNames: string[],
  trackNotes: boolean[][],
  trackClasses: (typeof Instrument)[],
  loopPlaying: boolean,
  noteMap: any
  buffersLoaded: boolean
}

class App extends React.Component<{}, IAppState>
{
  // loopPlayer: any;
  constructor(props: {})
  {
    super(props)

    const trackNames = [ "Lead", "Chords", "Sub", "Kick", "Snare", "Clap", "Hihats", "OpenHats", "Crashes", "Percs" ]
    const trackInstruments = [ Lead, Chords, Sub, Kick, Snare, Clap, Hihats, OpenHats, Crash, Percs ]

    this.state = {
      trackNames: trackNames,
      trackClasses: trackInstruments,
      // tracks: trackElements,
      trackNotes: [],
      loopPlaying: false,
      noteMap: new NoteMap(),
      buffersLoaded: false
    }

    Tone.Buffer.on('load', () =>
    {
      this.setState({
        buffersLoaded: true
      })
    })

    console.log("App notemap says: " + this.state.noteMap.get(0, 0))

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
            myName: this.state.trackNames[ index ],
            loopPlaying: this.state.loopPlaying,
            updateGrid: (grid: any) => { this.updateGrid(index, grid) },
            noteMap: this.state.noteMap
          }))
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Web Audio Interface!</h1>
          {this.state.buffersLoaded ?
            <PlayButton
              isPlaying={this.state.loopPlaying}
              playFunc={() => this.togglePlayLoop()} />
            : <p className='playBtnLoading'>Loading...</p>}
          {/* {this.loopPlayer} */}
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
