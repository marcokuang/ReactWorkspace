import React, { useState } from "react";
import { ModalProps } from "../interface";
import "../styles/modal.scss";
import ModalProject from "./ModalProject";
import ModalThankYouMessage from "./ModalThankYouMessage";

const Modal = (props: ModalProps) => {
  const [target, setTarget] = useState("project");
  if (!props.isShown) {
    return null;
  }

  if (target === "project") {
    console.log("PROJECT", target);

    return (
      <div className="modal">
        <ModalProject
          isShown={props.isShown}
          toggleModal={props.toggleModal}
          callback={setTarget}
        />
      </div>
    );
  }

  if (target === "thankyou") {
    return (
      <div className="modal">
        <ModalThankYouMessage
          isShown={props.isShown}
          toggleModal={props.toggleModal}
          callback={setTarget}
        />
        {/* <div>HIIII</div>; */}
      </div>
    );
  }

  return null;
};

export default Modal;
