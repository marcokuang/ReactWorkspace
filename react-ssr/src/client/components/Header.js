import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ auth }) {
  console.log("my login status: ", auth);

  const adminButton = auth ? (
    <a href="/api/logout" className="item">
      Log Out
    </a>
  ) : (
    <a href="/api/auth/google" className="item">
      Log In
    </a>
  );

  return (
    <div className="ui borderless teal menu">
      <Link to="/" className="item">
        React SSR
      </Link>
      <div className="right menu">
        <Link to="/users" className="item">
          Users
        </Link>
        <Link to="/admins" className="item">
          Admins
        </Link>
        {adminButton}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
