import React from 'react';
import Song from './song.js';

class SongList extends React.Component {

  render(){
    return(
      <div className="song-list">
        SongList
        <Song/>
      </div>
    )
  }

}

export default SongList;
