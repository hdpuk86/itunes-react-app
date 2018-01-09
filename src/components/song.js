import React from 'react';

class Song extends React.Component {

  render(){
    const songDetails = this.props.songDetails;
    return(
      <div className="song">
        <p>{this.props.position + 1}</p>
        <img src={songDetails['im:image'][0].label} alt="single"/>
        <p>{songDetails['im:name'].label}</p>
      </div>
    )
  }

}

export default Song;
