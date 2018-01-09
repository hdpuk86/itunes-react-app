import React from 'react';
import SongList from '../components/songList.js';

class TopSongsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      topSongs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({topSongs: data.feed.entry});
      }
    })
    request.send();
  }

  render(){
    return(
      <div className="top-songs-container">
        <h1>UK Top 20 Singles</h1>
        <SongList topSongs={this.state.topSongs}/>
      </div>
    )
  }

}

export default TopSongsContainer;
