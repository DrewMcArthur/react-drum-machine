import * as React from 'react'

import '../css/instrument.css'

interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  key: number
  stateToggle: () => boolean
}

interface IInstrumentState
{
  isOn: boolean
}

class Instrument extends React.Component<IInstrumentProps, IInstrumentState>
{
  constructor(props: IInstrumentProps)
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

  }

  public render ()
  {
    return (<div className={'instrument ' + (this.state.isOn ? 'active' : 'inactive')}>
      <p>{this.constructor.name}</p>
      <div className='powerBtn'>
        <button onClick={this.toggleState}>on/off</button>
      </div>
    </div >)
  }
}

export default Instrument
