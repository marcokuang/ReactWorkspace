import React from "react";
import VideoItem from "./VideoItem";
import  "../css/VideoList.css"

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
          key={video.id.videoId}
          onClickHandler={this.onHandleSelectedVideo}
          index={index}
        />
      );
    });

    return <div className="ui relaxed divided list scroll-list">{videoList}</div>;
  }
}

export default VideoList;
