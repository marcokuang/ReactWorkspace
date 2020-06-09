import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  // second argument is to provide a reference to the HTML element we want to render.
  // This element is not the parent element we use to render the application; it
  // exists outside of the parent DOM hierarchy.
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
