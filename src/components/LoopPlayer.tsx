import * as React from 'react'
import * as Tone from 'tone';
// import * as $ from 'jquery';


// import Instrument from 'src/sounds/Instrument';
// import Kick from 'src/sounds/Kick';

interface ILoopPlayerProps
{
  isPlaying: boolean
  grid: boolean[][]
  instruments: JSX.Element[]
  noteMap: any
}
interface ILoopPlayerState
{
  isPlaying: boolean
  noteMap: any
}

class LoopPlayer extends React.Component<ILoopPlayerProps, ILoopPlayerState>
{
  transport: any;
  notes: boolean[][];
  loops: any[];
  loop: Tone.Loop;
  instruments: JSX.Element[];
  sounds: any;
  noteMap: any;

  constructor(props: ILoopPlayerProps)
  {
    super(props)
    this.state = {
      isPlaying: props.isPlaying,
      noteMap: props.noteMap
    }

    this.transport = Tone.Transport
    this.notes = this.props.grid
    // this.loops = []
    this.instruments = this.props.instruments

    // loop through each instrument and loop through each beatdivision and play a note
    this.transport.scheduleRepeat((time: Tone.Time) =>
    {
      for (let instrument of [ 0, 1, 2, 3, 4 ])
      {
        for (let beatdivision of [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ])
        {
          console.log('in loop player transport loop time is ' + time)
          console.log(this.noteMap.get(instrument, beatdivision))
          // const selector = '.instrument.' + instrument + ' .beatDivision.' + beatdivision
          // const div = $(selector)
          // // or if ()
          // if (div && div.hasClass('active'))
          // {
          //   this.sounds[ instrument ].triggerAttackRelease("C4", '16n', time.toMilliseconds() + (new Tone.Time("16n")).toMilliseconds())

          // }
        }

      }
    }, '1m')
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

    // this.transport.scheduleRepeat((time: Tone.Time) =>
    // {
    // alert("transport loop")
    // // this.instruments[ 0 ].play()
    // for (let instrument of this.props.instruments)
    // {
    //   if (instrument.isOn())
    //   {
    //     instrument.playNote(time)
    //   }
    // }
    // this.props.tracks[ i ].

    // }, '1m')

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
