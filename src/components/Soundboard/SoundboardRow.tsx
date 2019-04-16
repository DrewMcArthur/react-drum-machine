import * as React from 'react'
import SoundboardSpot from './SoundboardSpot';

interface ISoundboardProps
{
  beatDivisions: number
  height: number
  noteMap: any
  trackID: number
  soundID: number
  sounds: number
}
interface ISoundboardState
{
  noteMap: any
  row: JSX.Element[]
  trackID: number
  soundID: number
}

const BEATS_PER_BAR = 4

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
      trackID: props.trackID,
      soundID: props.soundID
    }
  }

  public generateRow (props: ISoundboardProps)
  {
    // flatten array of bars
    return Array.from(Array(props.beatDivisions / BEATS_PER_BAR).keys())
      .map((el: number, i: number) =>
        <div key={i} className='bar'>{this.generateBar(props, i)}</div>)

  }

  public generateBar (props: ISoundboardProps, barIndex: number)
  {
    return Array.from(Array(BEATS_PER_BAR))
      .map((el: number, i: number) =>
        <SoundboardSpot
          height={props.height}
          beatsPerBar={BEATS_PER_BAR}
          beatDivisions={props.beatDivisions}
          track={props.trackID}
          soundId={props.soundID}
          id={barIndex * 4 + i}
          key={i}
          notifyToggle={() => this.toggleDivision(i)}
          noteMap={props.noteMap}
          active={false}
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
      <div className='row' style={{ height: (101 / this.props.sounds) + '%' }} key={this.props.trackID}>
        {this.state.row}
      </div>
    )
  }
}

export default Soundboard
