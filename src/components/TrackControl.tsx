import * as React from 'react'

import '../css/instrument.css'

interface ITrackControlProps
{
  // a Tone.js synth object that can be used to trigger a sound
  key: number
  name: string
  stateToggle: () => boolean
}

interface ITrackControlState
{
  isOn: boolean
}

class TrackControl extends React.Component<ITrackControlProps, ITrackControlState>
{
  constructor(props: ITrackControlProps)
  {
    super(props)
    this.state = {
      "isOn": true
    }
    this.toggleState = this.toggleState.bind(this)
  }

  public toggleState ()
  {
    const isOn = this.props.stateToggle()
    this.setState({
      "isOn": isOn
    })
    return isOn
  }

  public render ()
  {
    return (
      <div className='instrumentControl'>
        <p>{this.props.name}</p>
        <div className='powerBtn'>
          <button onClick={this.toggleState}>on/off</button>
        </div>
      </div >)
  }
}

export default TrackControl
