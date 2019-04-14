import * as React from 'react';

interface ISoundboardSpotProps
{
  track: number
  id: number
  height: number
  beatDivisions: number
  notifyToggle: () => void
  noteMap: any
  active: boolean
}
interface ISoundboardSpotState
{
  active: boolean
  noteMap: any
  track: number
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
      id: props.id
    }

    this.toggle = this.toggle.bind(this)
  }

  public toggle ()
  {
    const setting = this.state.noteMap.toggle(this.state.track, this.state.id)
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
          height: this.props.height + "%",
          width: (100 / this.props.beatDivisions) + "%"
        }}
        key={this.props.id}
        onClick={this.toggle}
      />
    )
  }
}

export default SoundboardSpot
