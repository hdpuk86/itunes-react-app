import React from 'react';

class Song extends React.Component {

  render(){
    const songDetails = this.props.songDetails;
    const songImage = songDetails['im:image'][2];
    return(
      <div className="song">
        <p className="song-attr">{this.props.position + 1}. {songDetails['im:name'].label}</p>
        <img className="song-attr" src={songImage.label} alt="single" height={songImage.attributes.height}/>
        <section>
          <p className="song-attr">{songDetails['im:name'].label}</p>
          <p className="song-attr">{songDetails['im:artist'].label}</p>
          <p className="song-attr">{songDetails.category.attributes.label}</p>
          <p className="song-attr">{songDetails['im:price'].label}</p>
        </section>
      </div>
    )
  }

}

export default Song;
