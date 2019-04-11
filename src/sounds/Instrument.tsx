import * as React from 'react'

import '../css/instrument.css'

import Soundboard from 'src/components/Soundboard/Soundboard';
import TrackControl from 'src/components/TrackControl';

interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  id: number
  stateToggle: () => boolean
}

interface IInstrumentState
{
  gridState: any[]
  isOn: boolean
}

class Instrument extends React.Component<IInstrumentProps, IInstrumentState>
{
  constructor(props: IInstrumentProps)
  {
    super(props)
    this.state = {
      "gridState": [ false, false, false, false ],
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

  // given the grid for the soundboard, update this instrument's grid state
  public updateSoundboard (grid: any)
  {
    this.setState({
      gridState: grid
    })
  }

  public render ()
  {
    return (
      <div className={'instrument ' + (this.state.isOn ? 'active' : 'inactive')}>
        <TrackControl
          key={this.props.id}
          name={this.constructor.name}
          stateToggle={this.toggleState}
        />
        <Soundboard
          updateGrid={this.updateSoundboard}
          height={1}
          beatDivisions={4}
        />
      </div >
    )
  }
}

export default Instrument
