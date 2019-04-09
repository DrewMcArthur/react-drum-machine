import * as React from 'react';
import Instrument from './Instrument'

class Snare extends Instrument
{
  public playSnare ()
  {
    // tone js stff to play a Snare sound
    // console.log("Snare.playSnare() executes");
    alert("playSnare good")
    this.props.synth.triggerAttackRelease('C2', '8n', 0);
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return <button onClick={this.playSnare}>Play</button>
  }
}

export default Snare

