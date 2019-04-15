import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class Chords extends Instrument
{
  buffer: any
  constructor(props: IInstrumentProps)
  {
    super(props)
    this.buffer = new Tone.Player("../Samples/Drums/Kicks/MB Kick (2).wav").toMaster()
  }

  public playSound (time: number)
  {
    // tone js stff to play a kick sound
    if (this.buffer.loaded)
    {
      this.buffer.start(time)
    }
  }
}

export default Chords

