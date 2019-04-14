import * as React from 'react'

import SoundboardRow from './SoundboardRow'

interface ISoundboardProps
{
  // callback that informs the instrument of track updates
  updateGrid: any

  // number of rows the track should have 
  height: number

  // number of divisions within a bar (default = 4)
  beatDivisions: number

  noteMap: any
  trackID: number
}
interface ISoundboardState
{
  grid: any
  noteMap: any
  trackID: number
}

class Soundboard extends React.Component<ISoundboardProps, ISoundboardState>
{
  constructor(props: ISoundboardProps)
  {
    super(props)

    this.state = {
      grid: this.generateBoard(props),
      noteMap: props.noteMap,
      trackID: props.trackID
    }
  }

  public generateBoard (props: ISoundboardProps)
  {
    return Array.from(Array(props.height).keys())
      .map((i: number) =>
        <SoundboardRow
          key={i}
          trackID={props.trackID}
          height={100 / props.height}
          beatDivisions={props.beatDivisions}
          noteMap={props.noteMap}
        />
      )
  }

  public render ()
  {
    return (
      <div className='Soundboard'>
        {this.state.grid}
      </div>
    )
  }
}

export default Soundboard
