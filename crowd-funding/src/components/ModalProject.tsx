import { Card } from "../interface";
import { renderProduct } from "./ModalProductCard";
import { ModalProps } from "../interface";
import iconCloseModal from "../img/icon-close-modal.svg";
import { useState } from "react";

interface MyModalProps extends ModalProps {
  callback: Function;
}

const cards: Array<Card> = [
  {
    title: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    price: null,
    inventory: null,
  },
  {
    title: "Bamboo Stand",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    price: 25,
    inventory: 101,
  },
  {
    title: "Black Edition Stand",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    price: 75,
    inventory: 64,
  },
  {
    title: "Mahogany Special Edition",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    price: 200,
    inventory: 0,
  },
];

const ModalProject = (props: MyModalProps) => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  return (
    <div className="modal-content" id="projectContent">
      <div className="modal__header">
        <h2>Back this project</h2>
        <a
          href="/#"
          className="modal__header__close-button"
          onClick={() => {
            props.toggleModal(!props.isShown);
          }}
        >
          <img src={iconCloseModal} alt="" />
        </a>
      </div>
      <div className="modal-cards">
        {renderProduct(cards, selectedTitle, setSelectedTitle, props.callback)}
      </div>
    </div>
  );
};

export default ModalProject;
