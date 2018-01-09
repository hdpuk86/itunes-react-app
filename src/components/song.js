import React from 'react';

class Song extends React.Component {

  render(){
    const songDetails = this.props.songDetails;
    const songImage = songDetails['im:image'][2];
    return(
      <div className="song">
        <img className="song-attr" src={songImage.label} alt="single" height={songImage.attributes.height}/>
        <p className="song-attr">{this.props.position + 1}</p>
        <p className="song-attr">{songDetails['im:name'].label}</p>
        <p className="song-attr">{songDetails['im:artist'].label}</p>
      </div>
    )
  }

}

export default Song;
