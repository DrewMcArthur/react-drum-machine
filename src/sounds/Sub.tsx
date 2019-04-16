import Instrument from './Instrument'
import { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Sub extends Instrument
{
  buffers: any
  constructor(props: IInstrumentProps)
  {
    super(props)
    const soundFolder = [ "/Samples/Drums/808s/" ]
    const soundFiles = [ "MB 808 (2).wav", "MB 808 (7).wav", "MB 808 (9).wav", "MB 808 (10).wav" ]
    this.buffers = []
    soundFiles.forEach((filename: string, i: number) =>
    {
      this.buffers.push(
        new Tone.Player(soundFolder + filename).toMaster()
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

export default Sub
