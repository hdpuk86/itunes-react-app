import React from 'react';

class Song extends React.Component {

  render(){
    const songDetails = this.props.songDetails;
    const songImage = songDetails['im:image'][2];
    return(
      <div className="song">
        <p className="song-position">{this.props.position + 1}. {songDetails['im:name'].label}</p>
        <section className="song-section">
          <img className="song-attr" src={songImage.label} alt="single" height={songImage.attributes.height}/>
          <div>
            <p className="song-attr">Title:  {songDetails['im:name'].label}</p>
            <p className="song-attr">Artist:  {songDetails['im:artist'].label}</p>
            <p className="song-attr">Genre:  {songDetails.category.attributes.label}</p>
            <p className="song-attr">Price:  {songDetails['im:price'].label}</p>
          </div>
        </section>
      </div>
    )
  }

}

export default Song;
