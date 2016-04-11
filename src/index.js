import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YOUTUBE_API_KEY = 'AIzaSyAUTylvGCBsRikNM4JRLNdVlW6vP2NM1iY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Formation');
  }

  videoSearch(term){
    YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    // debounce uses lodash lib to delay how often the videaSearch function is called
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        {/*VideoList is passing the function onVideoSelect as a property to the component VideoList,
         which then gives VideoList a props it can access (e.g. props.onVideoSelect)
        */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
