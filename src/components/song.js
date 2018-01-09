import React from 'react';

class Song extends React.Component {

  render(){
    return(
      <div className="song">
        <p>{this.props.songDetails['im:name'].label}</p>
      </div>
    )
  }

}

export default Song;
