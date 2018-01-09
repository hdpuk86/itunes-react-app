import React from 'react';

class Song extends React.Component {

  render(){
    const songDetails = this.props.songDetails;
    return(
      <div className="song">
        <img src={songDetails['im:image'][0].label} alt=""/>
        <p>{songDetails['im:name'].label}</p>
      </div>
    )
  }

}

export default Song;
