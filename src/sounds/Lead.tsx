import * as React from 'react';
import Instrument from './Instrument'

class Lead extends Instrument
{
  public playLead ()
  {
    // tone js stff to play a Lead sound
    // console.log("Lead.playLead() executes");
    alert("playLead good")
    this.props.synth.triggerAttackRelease('C2', '8n', 0);
  }

  public render ()
  {
    // will be a larger thing that can be turned on/off and 
    // used as a dropdown to select a soundfile
    return <button onClick={this.playLead}>Play</button>
  }
}

export default Lead

