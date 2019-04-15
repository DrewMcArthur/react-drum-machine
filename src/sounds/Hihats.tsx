import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class HiHats extends Instrument
{

  buffers: Tone.Player[]
  constructor(props: IInstrumentProps)
  {
    super(props)
    const soundFolder = [ "/Samples/Drums/" ]
    const soundFiles = [
      "Hi-Hats/MB Hi Hat (2).wav",
      "Hi-Hats/MB Hi Hat (2).wav",
      "Open Hats/MB Open Hat (5).wav",
      "Open Hats/MB Open Hat (6).wav"
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
export default HiHats

