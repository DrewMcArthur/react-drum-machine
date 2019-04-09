import * as React from 'react';
export default class Kick extends React.Component
{
  public playKick ()
  {
    // tone js stff to play a kick sound
    // console.log("Kick.playKick() executes");
    alert("playkick good")
  }

  public render ()
  {
    return <button onClick={this.playKick}>Play</button>
  }
}
