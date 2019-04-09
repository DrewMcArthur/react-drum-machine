import * as React from 'react';
import Instrument from './Instrument'

class Chords extends Instrument
{
  public playChords ()
  {
    // tone js stff to play a Chords sound
    // console.log("Chords.playChords() executes");
    alert("playChords good")
    this.props.synth.triggerAttackRelease('C2', '8n', 0);
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return <button onClick={this.playChords}>Play</button>
  }
}

export default Chords

