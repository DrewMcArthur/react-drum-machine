import * as React from 'react'

interface ISoundboardProps
{
  gridState: any
}

class Soundboard extends React.Component<ISoundboardProps>
{
  constructor(props: ISoundboardProps)
  {
    super(props)
  }

  public render ()
  {
    return (
      <div className='Soundboard'>
        empty soundboard
      </div>
    )
  }
}

export default Soundboard
