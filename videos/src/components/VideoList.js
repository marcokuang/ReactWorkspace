import React from "react";
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  state = { selectedID: -1 };

  onHandleSelectedVideo = event => {
    console.log(event.target.value);
  };

  render() {
    const videoList = this.props.videos.map(video => {
      return <VideoItem video={video} key={video.etag} onClickHandler={this.onHandleSelectedVideo}/>;
    });

    return videoList;
  }
}

export default VideoList;
