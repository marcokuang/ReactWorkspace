import React from "react";
import { Card } from "../interface";
import "../styles/product.scss";

interface MyProps {
  product: Card;
  selectedTitle: string | null;
  updateTitle: Function;
  children?: string;
  callback?: Function;
}

const ModalProductCard = (props: MyProps) => {
  const myProduct = props.product;
  let productClass;
  let buttonClass;

  // change the class name based on the product inventory
  if (myProduct.inventory) {
    productClass = "modal-product-card";
    buttonClass = "btn-regular--green";
  } else {
    productClass = "modal-product-card";
    buttonClass = "btn-regular";
  }

  // add the select class to the div if current card is selected
  if (myProduct.title === props.selectedTitle) {
    productClass += " selected";
  }
  return (
    <div className={productClass}>
      <div className="modal-product-card__select-button">
        <input
          type="checkbox"
          name={myProduct.title}
          id={myProduct.title}
          checked={myProduct.title === props.selectedTitle ? true : false}
          onChange={() => {
            if (props.selectedTitle === myProduct.title) {
              props.updateTitle(null);
            } else {
              props.updateTitle(myProduct.title);
            }
          }}
        />
      </div>
      <div className="modal-product-card__details">
        <div className="modal-product-card--first">
          <h3>{myProduct.title}</h3>
          {!myProduct.price ? null : (
            <p className="modal-product-card__pledge text--green">
              Pledge ${myProduct.price.toLocaleString()} or more
            </p>
          )}

          {myProduct.inventory === null ? null : (
            <p className="modal-product-card__inventory-container">
              <strong className="modal-product-card__inventory">
                {myProduct.inventory}
              </strong>
              left
            </p>
          )}
        </div>

        <div className="modal-product-card--second">
          <p className="modal-product-card__content">{myProduct.description}</p>
        </div>
      </div>
      <br />
      <div
        className="modal-product-card__pledge-section"
        style={{
          display:
            myProduct.title === props.selectedTitle && myProduct.inventory
              ? "flex"
              : "none",
        }}
      >
        <p className="pledge-section__label">Enter your pledge</p>
        {myProduct.price === null ? null : (
          <span className="pledge-section__input-wrapper">
            <input
              className="pledge-section__input"
              type="number"
              placeholder={
                myProduct.price === null ? "" : myProduct.price.toLocaleString()
              }
            />
          </span>
        )}

        <button
          className={buttonClass}
          onClick={() => {
            if (props.callback && myProduct.inventory) {
              props.callback("thankyou");
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export function renderProduct(
  products: Array<Card>,

  seletedTitle: string | null,
  selectCallback: Function,
  toggleCallback?: Function
) {
  return products.map((item) => (
    <ModalProductCard
      product={item}
      selectedTitle={seletedTitle}
      updateTitle={selectCallback}
      callback={toggleCallback}
      key={item.title}
    ></ModalProductCard>
  ));
}

export default ModalProductCard;
