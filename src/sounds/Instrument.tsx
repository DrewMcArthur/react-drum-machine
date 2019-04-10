import * as React from 'react'

import '../css/instrument.css'

import Soundboard from 'src/components/Soundboard';

interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  key: number
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

  }

  public render ()
  {
    return (<div className={'instrument ' + (this.state.isOn ? 'active' : 'inactive')}>
      <div className='instrumentControl'>
        <p>{this.constructor.name}</p>
        <div className='powerBtn'>
          <button onClick={this.toggleState}>on/off</button>
        </div>
      </div>
      <Soundboard gridState={this.state.gridState} />
    </div >)
  }
}

export default Instrument
