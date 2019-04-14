import * as React from 'react'
import * as Tone from 'tone'

import '../css/instrument.css'

import Soundboard from 'src/components/Soundboard/Soundboard';
import TrackControl from 'src/components/TrackControl';

interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  id: number
  stateToggle: () => boolean
  isPlaying: boolean
  loopPlaying: boolean
  updateGrid: (grid: any) => void
  noteMap: any
}

interface IInstrumentState
{
  gridState: any[]
  isOn: boolean
  trackPlayingIndex: number
  loopPlaying: boolean
  noteMap: any
}

const TIME_PER_16TH: number = new Tone.Time('0:0:1').toMilliseconds()

class Instrument extends React.Component<IInstrumentProps, IInstrumentState>
{
  transport: Tone.Transport
  constructor(props: IInstrumentProps)
  {
    super(props)

    this.state = {
      gridState: [ false, false, false, false ],
      isOn: props.isPlaying,
      trackPlayingIndex: 0,
      loopPlaying: props.loopPlaying,
      noteMap: props.noteMap
    }

    this.transport = Tone.Transport
    this.transport.stop()
    this.transport.scheduleRepeat((time: number) =>
    {
      console.log("instrument transport loop")
      if (this.shouldPlay())
      {
        this.playNote(time)
      }
    }, '1m')

    this.toggleState = this.toggleState.bind(this)
  }

  public componentWillReceiveProps (nextProps: IInstrumentProps)
  {
    this.setState({
      isOn: nextProps.isPlaying
    })
  }

  public toggleState ()
  {
    const isOn = this.props.stateToggle()
    this.setState({
      "isOn": isOn
    })
    return isOn
  }

  public isOn ()
  {
    return this.state.isOn
  }

  public shouldPlay ()
  {
    return this.state.isOn && this.state.loopPlaying
  }

  public playNote (time: number)
  {
    const index: number = new Tone.Time(time).toMilliseconds() / TIME_PER_16TH
    console.log("this is note " + index + ". (" + new Tone.Time(time).toMilliseconds() + " / " + TIME_PER_16TH + ")")
    this.setState({
      trackPlayingIndex: index
    })
  }

  // given the grid for the soundboard, update this instrument's grid state
  public updateSoundboard (grid: any)
  {
    this.props.updateGrid(grid)
    this.setState({
      gridState: grid
    })
  }

  public render ()
  {
    if (this.state.isOn && this.state.loopPlaying && this.transport.state != "started")
    {
      this.transport.start()
    }
    else if (!this.state.isOn || !this.state.loopPlaying)
    {
      this.transport.stop()
    }
    return (
      <div className={'instrument ' + this.props.id + ' ' + (this.state.isOn ? 'active' : 'inactive')}>
        {/* {this.state.trackPlayingIndex} */}
        <TrackControl
          key={this.props.id}
          name={this.constructor.name}
          stateToggle={this.toggleState}
        />
        <Soundboard
          updateGrid={this.updateSoundboard}
          height={1}
          trackID={this.props.id}
          beatDivisions={16}
          noteMap={this.state.noteMap}
        />
      </div >
    )
  }
}

export default Instrument
