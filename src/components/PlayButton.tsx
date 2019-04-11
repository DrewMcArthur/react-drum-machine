import * as React from 'react'

interface IPlayButtonProps
{
  isPlaying: boolean
  playFunc: () => void
}
interface IPlayButtonState
{
  isPlaying: boolean
}

class PlayButton extends React.Component<IPlayButtonProps, IPlayButtonState>
{
  constructor(props: IPlayButtonProps)
  {
    super(props)

    this.state = {
      isPlaying: false
    }
  }

  componentWillReceiveProps (newProps: IPlayButtonProps)
  {
    this.setState({
      isPlaying: newProps.isPlaying
    });
  }

  render ()
  {
    return (
      <div className='playButton' onClick={this.props.playFunc}>
        {this.state.isPlaying ? <i className="fa fa-stop"></i> : <i className="fa fa-play"></i>}
      </div>
    )
  }
}

export default PlayButton
