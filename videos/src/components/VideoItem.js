import React from "react";
import "../css/VideoItem.css"

class VideoItem extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <div
        className="item video-item"
        onClick={() => this.props.onClickHandler(video, this.props.index)}
      >
        <img className="ui image" src={video.snippet.thumbnails.high.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
