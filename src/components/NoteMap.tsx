/** class that holds the master state of each track and beat being on/off 
 * track soundboards tell this if they're on or not, 
 * and the loopplayer asks this to determine whether or not to play a note.
*/
export default class NoteMap 
{
  _noteMap: number[][]
  constructor()
  {
    this._noteMap = [
      // [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
      // [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
      // [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
      // [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    ]

    this.get = this.get.bind(this)
    this.set = this.set.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  public get (track: number, beat: number) 
  {
    return this._noteMap[ track ][ beat ] ? true : false
  }

  public getTrack (track: number)
  {
    return this._noteMap[ track ]
  }

  public set (track: number, beat: number, setting: boolean) 
  {
    this._noteMap[ track ][ beat ] = setting ? 1 : 0
    console.log(this._noteMap)
    return this.get(track, beat)
  }

  public toggle (track: number, beat: number)
  {
    console.log("toggling " + track + ", " + beat)
    return this.set(track, beat, !this.get(track, beat))
  }
}


// export default function ()
// {
//   const o = {
//     _noteMap: [
//       [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
//       [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
//       [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
//       [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
//     ],

//     get: function (this: any, track: number, beat: number) 
//     {
//       return this._noteMap[ track ][ beat ] ? true : false
//     },

//     set: function (this: any, track: number, beat: number, setting: boolean) 
//     {
//       this._noteMap[ track ][ beat ] = setting ? 1 : 0
//     }
//   }
//   return o
// }
