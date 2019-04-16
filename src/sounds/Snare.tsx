import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Snare extends Instrument
{
  buffers: any
  constructor(props: IInstrumentProps)
  {
    super(props)

    const soundFolder = [ "/Samples/Drums/Snares/" ]
    const soundFiles = [
      "MB Snare (1).wav",
      "MB Snare (2).wav",
      "MB Snare (11).wav",
      "MB Snare (15).wav"
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

export default Snare

