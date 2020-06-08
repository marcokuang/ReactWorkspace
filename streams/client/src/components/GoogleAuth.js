import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  //state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // initialize Javascript library
      window.gapi.client
        .init({
          clientId:
            "42908488592-37qnr0ucbur2rhfr3b9s0gpnbuvko1lg.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // getAuthInstance is to allow user to sign in
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(this.auth.isSignedIn.get());
          // after the auth instance is retrived, use the getter to get the sign in status
          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          // after the status is updated, the callback function will be called
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // it handles sign-in sign-out actions
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      // it calls the redux action creator for sign in or sign out actions
      // a user id param will be passed to the action creator.
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    //window.gapi.auth2.getAuthInstance().signIn();
    console.log("Sign in button clicked");
    this.auth.signIn();
  };

  onSignOutClick = () => {
    console.log("Sign out button clicked");
    this.auth.signOut();
  };

  // function to render the auth button on the screen
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      console.log(this.props.userId);
      return (
        <button className="ui button google red" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui button google red" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
