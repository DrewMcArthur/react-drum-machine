import * as React from 'react';

interface ISoundboardSpotProps
{
  track: number
  id: number
  soundId: number
  height: number
  beatDivisions: number
  notifyToggle: () => void
  noteMap: any
  active: boolean
  beatsPerBar: number
}
interface ISoundboardSpotState
{
  active: boolean
  noteMap: any
  track: number
  soundId: number
  id: number
}
class SoundboardSpot extends React.Component<ISoundboardSpotProps, ISoundboardSpotState>
{
  constructor(props: ISoundboardSpotProps)
  {
    super(props)

    this.state = {
      active: props.active,
      noteMap: props.noteMap,
      track: props.track,
      id: props.id,
      soundId: props.soundId
    }

    this.toggle = this.toggle.bind(this)
  }

  public toggle ()
  {
    const setting = this.state.noteMap.toggle(this.state.track, this.state.soundId, this.state.id)
    console.log('newsetting: ' + setting)
    this.setState((prevState: ISoundboardSpotState) =>
    {
      return {
        active: setting
      }
    })
  }

  render ()
  {
    return (
      <div
        className={'beatDivision ' + (this.state && this.state.active
          ? 'active ' + this.props.id : 'inactive ' + this.props.id)}
        style={{
          height: "100%",
          width: (96.5 / this.props.beatsPerBar) + "%"
        }}
        key={this.props.id}
        onClick={this.toggle}
      >
      </div>
    )
  }
}

export default SoundboardSpot
