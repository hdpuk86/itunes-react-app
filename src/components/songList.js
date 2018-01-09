import React from 'react';
import Song from './song.js';

class SongList extends React.Component {

  render(){
    const topSongs = this.props.topSongs.map((song) => {
       return <Song songDetails={song} key={song.id.attributes['im:id']}></Song>
    })
    return(
      <div className="song-list">
        {topSongs}
      </div>
    )
  }

}

export default SongList;
