import React from "react";

class VideoItem extends React.Component {
  render() {
    return <div onClick={this.props.onClickHandler}>{this.props.video.snippet.title}</div>;
  }
}

export default VideoItem;
