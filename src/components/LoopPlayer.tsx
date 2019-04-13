import * as React from 'react'
import * as Tone from 'tone';
// import Instrument from 'src/sounds/Instrument';
// import Kick from 'src/sounds/Kick';

interface ILoopPlayerProps
{
  isPlaying: boolean
  grid: boolean[][]
  instruments: JSX.Element[]
}
interface ILoopPlayerState
{
  isPlaying: boolean
}

class LoopPlayer extends React.Component<ILoopPlayerProps, ILoopPlayerState>
{
  transport: any;
  notes: boolean[][];
  loops: any[];
  loop: Tone.Loop;
  instruments: JSX.Element[];

  constructor(props: ILoopPlayerProps)
  {
    super(props)
    this.state = {
      isPlaying: props.isPlaying
    }

    this.transport = Tone.Transport
    this.notes = this.props.grid
    // this.loops = []
    this.instruments = this.props.instruments
    // Tone.context.resume()

    // this.loop = new Tone.Loop(() =>
    // {
    //   alert("LOOOOOOP")
    //   this.instruments[ 0 ].play()
    //   // play sounds
    // for (let note of track)
    // {
    //   if (note)
    //   {
    //     // synth.triggerAttackRelease("C3", 16n, time)

    //   }
    // }

    // }, "1m")

    this.transport.scheduleRepeat((time: Tone.Time) =>
    {
      alert("transport loop")
      this.instruments[ 0 ].play()
      for (let instrument of this.props.instruments)
      {
        if (instrument.isOn())
        {
          instrument.playNote(time)
        }
      }
      // this.props.tracks[ i ].

    }, '1m')

    // //repeated event every 8th note
    // this.loops = []
    // for (let i = 0; i < this.instruments.length; i++)
    // {
    //   this.loops.push(
    //     new Tone.Loop(() =>
    //     {
    //       alert("LOOOOOOP")
    //       this.instruments[ i ].play()
    //       // // play sounds
    //       // for (let note of track)
    //       // {
    //       //   if (note)
    //       //   {
    //       //     // synth.triggerAttackRelease("C3", 16n, time)

    //       //   }
    //       // }

    //     }, "1m")
    //   )
    // }
  }

  componentWillReceiveProps (nextProps: ILoopPlayerProps)
  {
    this.setState({
      isPlaying: nextProps.isPlaying
    })
  }

  render ()
  {
    if (this.state.isPlaying && this.transport.state != "started")
    {
      this.transport.start()
    }
    else if (!this.state.isPlaying)
    {
      this.transport.stop()
    }

    return (
      <div className="loopPlayer" />
    )
  }

  public play ()
  {
    alert('loopplayer.play')
    this.loop.start(0)
  }
  public stop ()
  {
    this.loop.stop(0)
  }
}

export default LoopPlayer
