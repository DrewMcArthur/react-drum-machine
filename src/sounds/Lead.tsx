import Instrument, { IInstrumentProps } from './Instrument'
import * as Tone from 'tone';

class Lead extends Instrument
{
  notes: string[]
  synths: any[]
  constructor(props: IInstrumentProps)
  {
    super(props)
    this.synths = [
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster(),
      new Tone.PluckSynth().toMaster()
    ]
    this.notes = [ "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5" ].reverse()
  }

  public playSound (sound: number, time: number)
  {
    // tone js stff to play a kick sound
    if (this.synths[ sound ])
    {
      console.log('synth playing sound: ' + this.notes[ sound ])
      this.synths[ sound ].triggerAttackRelease(this.notes[ sound ], '16n', time)
    }
  }
}

export default Lead

