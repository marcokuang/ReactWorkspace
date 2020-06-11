// create a store to contain all business logic and data and provide to other
// components inside the componnent hierarchy using context instead of replace redux

import React from "react";

// default value of the context is the english

const Context = React.createContext("english");

// LanguageStore will be exported as named export i.e. import {LanguageStore} from context.js
export class LanguageStore extends React.Component {
  // use to maintain the selected lanuage
  state = { language: "english" };

  // business logic
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  // set up a lanuage context provider
  // as the value prop, the cuurently selected langauge and the callback function will be
  // passed
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
