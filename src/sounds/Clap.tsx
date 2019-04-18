import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone'

class Clap extends Instrument
{
  buffers: any
  constructor(props: IInstrumentProps)
  {
    super(props)

    const soundFolder = [ "/Claps/" ]
    const soundFiles = [
      "MB Clap (3).wav",
      "MB Clap (2).wav",
      "MB Clap (4).wav",
      "MB Clap (7).wav"
    ]

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
    // tone js stff to play a Snare sound
    if (this.buffers[ sound ].loaded)
    {
      this.buffers[ sound ].start(time)
    }
  }
}

export default Clap

