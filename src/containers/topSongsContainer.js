import React from 'react';
import SongList from '../components/songList.js';

class TopSongsContainer extends React.Component{

  render(){
    return(
      <div className="top-songs-container">
        topSongsContainer
        <h1>UK Top 20 Singles</h1>
        <SongList/>
      </div>
    )
  }

}

export default TopSongsContainer;
