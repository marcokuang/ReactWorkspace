import React from "react";

class GoogleAuth extends React.Component {
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
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(auth.isSignedIn.get());
        });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
