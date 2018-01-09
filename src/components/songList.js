import React from 'react';
import Song from './song.js';

class SongList extends React.Component {

  render(){
    const topSongs = this.props.topSongs.map((song, index) => {
       return <Song songDetails={song} position={index} key={song.id.attributes['im:id']}></Song>
    })
    return(
      <div className="song-list">
        <h1>UK Top 20 Singles</h1>
        {topSongs}
      </div>
    )
  }

}

export default SongList;
