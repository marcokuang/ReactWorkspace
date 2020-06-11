import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // console.log(this.context);
    //const text = this.context.language === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
