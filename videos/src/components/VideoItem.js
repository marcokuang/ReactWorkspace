import React from "react";

class VideoItem extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <div
        onClick={event => this.props.onClickHandler(event, this.props.index)}
      >
        <img src={video.snippet.thumbnails.high.url} />
        {video.snippet.title}
      </div>
    );
  }
}

export default VideoItem;
