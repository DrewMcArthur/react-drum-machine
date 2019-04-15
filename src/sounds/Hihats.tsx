import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class HiHats extends Instrument
{
  player: any
  constructor(props: IInstrumentProps)
  {
    super(props)
    this.player = new Tone.Player("/Samples/Drums/Hi-Hats/MB Hi Hat (2).wav").toMaster()
  }

  public playSound (sound: number, time: number)
  {
    console.log('hihats playing sound at time: ' + time)
    // tone js stff to play a kick sound
    if (this.player.loaded)
    {
      console.log('hihats player loaded, starting player')
      this.player.start(time)
    }
  }
}

export default HiHats

