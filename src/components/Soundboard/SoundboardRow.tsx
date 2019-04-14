import * as React from 'react'
import SoundboardSpot from './SoundboardSpot';

interface ISoundboardProps
{
  key: number
  beatDivisions: number
  height: number
  noteMap: any
  trackID: number
}
interface ISoundboardState
{
  noteMap: any
  row: JSX.Element[]
  trackID: number
}

class Soundboard extends React.Component<ISoundboardProps, ISoundboardState>
{
  constructor(props: ISoundboardProps)
  {
    super(props)

    this.toggleDivision.bind(this)

    console.log("generated row: " + props.trackID)
    this.state = {
      noteMap: props.noteMap,
      row: this.generateRow(props),
      trackID: props.trackID
    }
  }

  public generateRow (props: ISoundboardProps)
  {
    return Array.from(Array(props.beatDivisions))
      .map((el: number, i: number) =>
        <SoundboardSpot
          height={props.height}
          beatDivisions={props.beatDivisions}
          track={props.trackID}
          id={i}
          key={i}
          notifyToggle={() => this.toggleDivision(i)}
          noteMap={props.noteMap}
        />
        // <div
        //   className={'beatDivision ' + (this.state && this.state.divisionStates[ i ] ? 'active ' + i : 'inactive ' + i)}
        //   style={{
        //     height: this.props.height + "%",
        //     width: (100 / this.props.beatDivisions) + "%"
        //   }}
        //   key={i}
        //   onClick={() => this.toggleDivision(i)}/>
      )
  }

  public toggleDivision (i: number): void
  {
    console.log('toggledivision')
    console.log(this.state)
    console.log(this.state.noteMap)
    // this.state.noteMap.set(this.props.key, i, !this.state.noteMap.get(this.props.key, i))
    // if (this.state && this.state.divisionStates)
    // {
    //   console.log("division clicked: " + i)
    //   this.setState((prevState: ISoundboardState) =>
    //   {
    //     const divisions: number[] = prevState.divisionStates
    //     const setting: number = prevState.divisionStates ? 0 : 1
    //     divisions[ i ] = setting
    //     return {
    //       divisionStates: divisions
    //     }
    //   }, () => 
    //     {
    //       return this.state.divisionStates[ i ]
    //     })
    // }
  }

  public render ()
  {
    return (
      <div className='row' key={this.props.key}>
        {this.state.row}
      </div>
    )
  }
}

export default Soundboard
