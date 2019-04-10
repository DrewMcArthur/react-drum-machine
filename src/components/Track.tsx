import * as React from 'react'

class Track extends React.Component
{
  public render ()
  {
    return (
      <div className='track'>
        {/* children? */}
        {this.props.children}
      </div>
    )
  }
}

export default Track
