import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class Percs extends Instrument
{

  buffers: Tone.Player[]
  constructor(props: IInstrumentProps)
  {
    super(props)
    const soundFolder = [ "/Samples/Drums/Extras/" ]
    const soundFiles = [
      "MB Church Bell.wav",
      "MB Lumi Hit.wav",
      "MB Narcatics Hit.wav",
      "MB Tubular Bell.wav"
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
    // tone js stff to play a kick sound
    if (this.buffers[ sound ].loaded)
    {
      this.buffers[ sound ].start(time)
    }
  }
}
export default Percs

