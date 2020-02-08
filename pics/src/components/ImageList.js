import React from "react";
import ImageCard from "./ImageCard";
import "../css/ImageList.css";

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map(image => {
          return <ImageCard image={image} key={image.id}></ImageCard>;
        })}
      </div>
    );
  }
}

export default ImageList;
