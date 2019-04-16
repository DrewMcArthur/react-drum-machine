import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Crash extends Instrument
{
  buffers: any
  constructor(props: IInstrumentProps)
  {
    super(props)

    const soundFolder = [ "/Samples/Drums/Crashes/" ]
    const soundFiles = [
      "MB Crash (3).wav",
      "MB Crash (2).wav",
      "MB Crash (5).wav",
      "MB Crash (9).wav"
    ]

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
    // tone js stff to play a Snare sound
    if (this.buffers[ sound ].loaded)
    {
      this.buffers[ sound ].start(time)
    }
  }
}

export default Crash

