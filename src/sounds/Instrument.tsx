import * as React from 'react'
import * as Tone from 'tone'

import '../css/instrument.css'

import Soundboard from 'src/components/Soundboard/Soundboard';
import TrackControl from 'src/components/TrackControl';

export interface IInstrumentProps
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
  trackId: number
  loopPlaying: boolean
  noteMap: any
}

class Instrument extends React.Component<IInstrumentProps, IInstrumentState>
{
  transport: Tone.Transport
  loopId: number
  sound: any
  constructor(props: IInstrumentProps)
  {
    super(props)

    this.state = {
      gridState: [ false, false, false, false ],
      isOn: props.isPlaying,
      trackId: props.id,
      loopPlaying: props.loopPlaying,
      noteMap: props.noteMap
    }

    this.transport = Tone.Transport
    this.loopId = this.state.trackId
    this.toggleState = this.toggleState.bind(this)
  }

  updateLoop = () =>
  {
    const { noteMap, trackId, isOn } = this.state
    if (!noteMap) { return; }
    this.transport.clear(this.loopId);
    console.log("updating instrument loop")

    const loop = (time: number) =>
    {
      console.log("instrument looping" + trackId)
      noteMap.getTrack(trackId).forEach((soundStates: number[], soundIndex: number) =>
      {
        soundStates.forEach((state: number, stateIndex) => 
        {
          if (state == 1 && isOn)
          {
            console.log('playing note: ' + stateIndex + ': ' + state)
            this.playSound(soundIndex, time + stateIndex * new Tone.Time('16n').toSeconds())
          }
        })
      })
    }
    this.loopId = this.transport.scheduleRepeat(loop, "1m")
  }

  public playSound (sound: number, time: number)
  {
    throw new Error("implement playsound")
  }

  public componentWillReceiveProps (nextProps: IInstrumentProps)
  {
    this.setState({
      isOn: nextProps.isPlaying,
      loopPlaying: nextProps.loopPlaying
    })
    this.updateLoop()
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
    return (
      <div className={'instrument ' + this.props.id + ' ' + (this.state.isOn ? 'active' : 'inactive')}>
        <TrackControl
          key={this.props.id}
          name={this.constructor.name}
          stateToggle={this.toggleState}
        />
        <Soundboard
          updateGrid={this.updateSoundboard}
          height={this.state.noteMap.getTrack(this.props.id).length}
          trackID={this.props.id}
          beatDivisions={16}
          noteMap={this.state.noteMap}
        />
      </div >
    )
  }
}

export default Instrument
