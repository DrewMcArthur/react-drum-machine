import * as React from 'react'

interface ISoundboardProps
{
  bars: number
  beats: number
  tracks: JSX.Element[]
}

class Soundboard extends React.Component<ISoundboardProps>
{
  constructor(props: ISoundboardProps)
  {
    super(props)
  }

  render ()
  {
    return (
      <div className='Soundboard'>
        empty soundboard
      </div>
    )
  }
}

export default Soundboard
