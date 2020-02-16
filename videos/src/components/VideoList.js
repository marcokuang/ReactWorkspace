import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  state = { selectedID: -1 };

  onHandleSelectedVideo = (event, index) => {
    console.log(index);
    this.setState({selectedID: index});
  };

  render() {
    const videoList = this.props.videos.map((video, index) => {
      return (
        <VideoItem
          video={video}
          key={video.etag}
          onClickHandler={this.onHandleSelectedVideo}
          index={index}
        />
      );
    });

    return videoList;
  }
}

export default VideoList;
