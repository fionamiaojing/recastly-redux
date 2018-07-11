import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import Nav from './Nav.js';
// import VideoPlayer from './VideoPlayer.js';
// import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
// import changeVideoList from '../actions/videoList.js';
import handleVideoSearch from '../actions/search.js';
// import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.handleSearchInputChange('react tutorials');
    
  }

  handleVideoListEntryTitleClick(video) {
    this.props.changeVideo(video);
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeVideo: changeVideo,
    handleSearchInputChange: handleVideoSearch
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);