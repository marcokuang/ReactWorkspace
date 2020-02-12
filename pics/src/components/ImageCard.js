import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    // console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    // console.log(this.imageRef.current.clientHeight);
    this.setState({ spans: span });
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={description} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
