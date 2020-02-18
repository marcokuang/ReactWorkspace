import React from "react";

const basePlayerURL = "https://www.youtube.com/embed";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  let videoSourceURL = `${basePlayerURL}/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSourceURL}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
