import * as React from 'react'

interface ISoundboardProps
{
  key: number
  beatDivisions: number
  height: number
}
interface ISoundboardState
{
  divisionStates: boolean[]
  row: JSX.Element[]
}

class Soundboard extends React.Component<ISoundboardProps, ISoundboardState>
{
  constructor(props: ISoundboardProps)
  {
    super(props)

    this.toggleDivision.bind(this)

    const divisionStates = Array.from(Array(props.beatDivisions)).reduce(() => false)
    this.state = {
      divisionStates: divisionStates,
      // the row of elements - all buttons that tell the row they were clicked
      row: this.generateRow(props)
    }
  }

  public generateRow (props: ISoundboardProps)
  {
    return Array.from(Array(props.beatDivisions))
      .map((el: number, i: number) =>
        <div
          className={'beatDivision ' + (this.state && this.state.divisionStates[ i ] ? 'active' : 'inactive')}
          style={{
            height: this.props.height + "%",
            width: (100 / this.props.beatDivisions) + "%"
          }}
          key={i}
          onClick={() => this.toggleDivision(i)}
        />)
  }

  public toggleDivision (i: number): void
  {
    // TODO: make this work
    if (this.state && this.state.divisionStates)
    {
      // const newState = !this.state.divisionStates[ i ]
      // const newStateArray = Array.prototype.slice.call(this.state.divisionStates)
      // for (let s in newStateArray)
      //   alert(s)
      // newStateArray[ i ] = newState
      this.setState((prevState) =>
      {
        const newStates = Array.prototype.slice.call(this.state.divisionStates)
        newStates[ i ] = !this.state.divisionStates[ i ]
        return {
          divisionStates: prevState.divisionStates
        }
      })
    }
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
