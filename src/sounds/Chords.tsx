import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class Chords extends Instrument
{
  buffers: Tone.Player[]
  constructor(props: IInstrumentProps)
  {
    super(props)
    const soundFolder = [ "/Samples/Chords/" ]
    const soundFiles = [ "viio.aif", "vi.aif", "V.aif", "IV.aif", "iii.aif", "ii.aif", "I.aif" ]
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

export default Chords

