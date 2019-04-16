import * as React from 'react'
import * as Tone from 'tone'

import '../css/instrument.css'

import Soundboard from 'src/components/Soundboard/Soundboard';
import TrackControl from 'src/components/TrackControl';

export interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  id: number
  loopPlaying: boolean
  updateGrid: (grid: any) => void
  noteMap: any
  myName: string
}

interface IInstrumentState
{
  gridState: any[]
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
      trackId: props.id,
      loopPlaying: props.loopPlaying,
      noteMap: props.noteMap
    }

    this.transport = Tone.Transport
    this.loopId = this.state.trackId
  }

  updateLoop = () =>
  {
    const { noteMap, trackId } = this.state
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
          if (state == 1)
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
      loopPlaying: nextProps.loopPlaying
    })
    this.updateLoop()
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
      <div className={'instrument active n' + this.props.id}>
        <TrackControl
          key={this.props.id}
          myName={this.props.myName}
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
