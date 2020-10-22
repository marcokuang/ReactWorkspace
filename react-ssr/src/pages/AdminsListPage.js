import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../client/actions";
import requireAuth from "../client/components/hocs/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderLists() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        List of admins
        <ul>{this.renderLists()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => {
    console.log("Loading admin list");
    return dispatch(fetchAdmins());
  },
};
