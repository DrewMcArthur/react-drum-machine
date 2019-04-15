import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Snare extends Instrument
{
  buffer: any
  constructor(props: IInstrumentProps)
  {
    super(props)
    this.buffer = new Tone.Player("../Samples/Drums/Snares/MB Snare (2).wav").toMaster()
  }
  public playSound (time: number)
  {
    // tone js stff to play a Snare sound
    if (this.buffer.loaded)
    {
      this.buffer.start(time)
    }
  }
}

export default Snare

