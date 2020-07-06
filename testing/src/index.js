import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Root from "Root";

ReactDOM.render(
  <Root initState={{ comments: ["abc", "123"] }}>
    <App />
  </Root>,
  document.querySelector("#root")
);
