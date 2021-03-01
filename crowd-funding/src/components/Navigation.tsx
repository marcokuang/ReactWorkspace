import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/nav.scss";

interface NavProps {
  toggleModal: Function;
  showedModal: boolean;
}

function Navigation(props: NavProps) {
  const [isBookmarked, setIsBookMarked] = useState(false);

  let buttonName;
  let buttonClass;

  if (isBookmarked) {
    buttonClass = "btn-bookmark--marked";
    buttonName = "Bookmarked";
  } else {
    buttonClass = "btn-bookmark";
    buttonName = "Bookmark";
  }

  return (
    <div className="nav">
      <div className="nav__banner">
        <i className="nav__logo"></i>
        <div className="nav__banner-title">
          Mastercraft Bamboo Monitor Riser
        </div>
        <div className="nav__banner-label">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </div>
      </div>
      <div className="nav__buttons">
        <button
          className="btn-regular--green"
          onClick={() => {
            props.toggleModal(!props.showedModal);
          }}
        >
          Back this project
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            setIsBookMarked(!isBookmarked);
          }}
        >
          <i className="btn-bookmark__icon"></i>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default Navigation;
