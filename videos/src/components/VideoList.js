import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  state = { selectedVideoIndex: -1 };

  onHandleSelectedVideo = (video, index) => {
    console.log(index);
    this.setState({ selectedVideoIndex: index });
    this.props.onVideoSelect(video);
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

    return <div className="ui relaxed divided list">{videoList}</div>;
  }
}

export default VideoList;
