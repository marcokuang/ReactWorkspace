import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    // if (this.props.userId) {
    //   const user = this.props.user.find(user => user.id === this.props.userId);
    //   if (!user) {
    //     this.props.fetchUser(this.props.userId);
    //   }
    // }
    this.props.fetchUser(this.props.userId);
  }

  renderUser() {
    const { user } = this.props;
    return (
      <div className="header">
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    );
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div> {this.renderUser()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
