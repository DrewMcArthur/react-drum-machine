import * as React from 'react'

interface IInstrumentProps
{
  // a Tone.js synth object that can be used to trigger a sound
  synth: any
}

class Instrument extends React.Component<any, IInstrumentProps>
{
  constructor(props: IInstrumentProps)
  {
    super(props)
  }
  render ()
  {
    return <div className='emptyInstrument'></div>
  }
}

export default Instrument
