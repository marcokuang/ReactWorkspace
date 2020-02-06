import React from "react";
import "../css/ImageList.css";

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map(image => {
          return (
            <div key={image.id}>
              <img src={image.urls.regular} alt={image.description} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
