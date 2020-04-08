import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui list">PostList</div>;
  }
}

// state.posts is the posts reducer specified in combine reducer method.
const mapStateToProps = state => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
