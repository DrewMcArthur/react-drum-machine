import * as React from 'react'
import Track from './Track'

interface ITracksProps 
{
  synth: any
  tracks: JSX.Element[]
}

class Tracks extends React.Component<ITracksProps>
{
  constructor(props: ITracksProps)
  {
    super(props)
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return (
      <div className='Tracks'>
        {
          this.props.tracks.map((E: JSX.Element, index: number) =>
          {
            return <Track key={index}>{E}</Track>
          })}
      </ div>
    )
  }
}

export default Tracks
