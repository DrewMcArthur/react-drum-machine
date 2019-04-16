import * as React from 'react'

import '../css/instrument.css'

interface ITrackControlProps
{
  // a Tone.js synth object that can be used to trigger a sound
  key: number
  myName: string
}

class TrackControl extends React.Component<ITrackControlProps, {}>
{
  constructor(props: ITrackControlProps)
  {
    super(props)
  }

  public render ()
  {
    return (
      <div className='instrumentControl'>
        <p>{this.props.myName}</p>
      </div >)
  }
}

export default TrackControl
