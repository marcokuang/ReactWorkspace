import React from "react";

class ImageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map(image => {
          return (
            <div>
              <img src={image.urls.regular} key={image.id}></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
