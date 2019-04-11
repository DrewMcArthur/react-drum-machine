import * as React from 'react'

interface ILoopPlayerProps
{
  isPlaying: boolean
}
interface ILoopPlayerState
{
  isPlaying: boolean
}

class LoopPlayer extends React.Component<ILoopPlayerProps, ILoopPlayerState>
{
  constructor(props: ILoopPlayerProps)
  {
    super(props)
    this.state = {
      isPlaying: props.isPlaying
    }
  }

}

export default LoopPlayer
