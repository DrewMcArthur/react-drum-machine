import * as React from 'react';
import Instrument from './Instrument'

class Kick extends Instrument
{
  public playKick ()
  {
    // tone js stff to play a kick sound
    // console.log("Kick.playKick() executes");
    alert("playkick good")
    this.props.synth.triggerAttackRelease('C2', '8n', 0);
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return <button onClick={this.playKick}>Play</button>
  }
}

export default Kick
