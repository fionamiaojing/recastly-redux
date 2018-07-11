import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import { bindActionCreators } from 'redux';


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleVideoListEntryTitleClick: changeVideo
  }, dispatch);
};


var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


export default VideoListContainer;
