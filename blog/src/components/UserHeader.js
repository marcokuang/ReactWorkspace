import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  renderUser() {
    const user = this.props.user;
    return (

      <div>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    )
  }

  render() {
    console.log(this.props.user);
    return <div key={this.props.user.id}> {this.renderUser()}</div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);