import * as React from 'react';
import Instrument from './Instrument'

class HiHats extends Instrument
{
  public playHiHats ()
  {
    // tone js stff to play a HiHats sound
    // console.log("HiHats.playHiHats() executes");
    alert("playHiHats good")
    this.props.synth.triggerAttackRelease('C2', '8n', 0);
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return <button onClick={this.playHiHats}>Play</button>
  }
}

export default HiHats

