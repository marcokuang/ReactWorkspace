import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../client/actions";

class UsersList extends Component {
  componentDidMount() {
    console.log("loading data from component");
    this.props.fetchUsers();
  }

  renderUsers() {
    const result = this.props.users ? (
      this.props.users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })
    ) : (
      <div>Loading...</div>
    );
    return result;
  }

  render() {
    return (
      <div>
        <div>Lists</div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

// loadData will return a promise representing the dispatched action
export function loadData(store) {
  console.log("fetching data now");
  // manual action dispatch
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};
