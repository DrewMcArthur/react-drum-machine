import Instrument from './Instrument'
import { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Kick extends Instrument
{
  buffers: any
  constructor(props: IInstrumentProps)
  {
    super(props)
    const soundFolder = [ "/Kicks/" ]
    const soundFiles = [ "MB Kick (2).wav", "MB Kick (4).wav",
      "MB Kick (14).wav", "MB Kick (15).wav" ]
    this.buffers = []
    soundFiles.forEach((filename: string, i: number) =>
    {
      this.buffers.push(
        new Tone.Player(this.baseURL + soundFolder + filename).toMaster()
      )
    })
  }

  public playSound (sound: number, time: number)
  {
    // tone js stff to play a kick sound
    if (this.buffers[ sound ].loaded)
    {
      this.buffers[ sound ].start(time)
    }
  }
}

export default Kick
