import * as React from 'react'
import * as Tone from 'tone';

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
    this.instruments = this.props.instruments
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
