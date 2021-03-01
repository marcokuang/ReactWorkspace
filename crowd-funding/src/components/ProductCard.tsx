import React from "react";
import { Card } from "../interface";
import "../styles/product--modal.scss";

interface MyProps {
  product: Card;
  children?: string;
}

const ProductCard = (props: MyProps) => {
  const myProduct = props.product;
  let productClass;
  let buttonClass;
  let buttonName;

  if (myProduct.inventory) {
    productClass = "product-card";
    buttonName = "Select Reward";
    buttonClass = "btn-regular--green";
  } else {
    productClass = "product-card product-card--ended";
    buttonName = "Out of Stock";
    buttonClass = "btn-regular";
  }
  return (
    <div className={productClass}>
      <div className="product-card--first">
        <h3>{myProduct.title}</h3>
        {!myProduct.price ? null : (
          <p className="product-card__pledge text--green">
            Pledge ${myProduct.price.toLocaleString()} or more
          </p>
        )}
      </div>

      <div className="product-card--second">
        <p className="product-card__content">{myProduct.description}</p>
      </div>

      <div className="product-card--last">
        <p className="product-card__inventory-container">
          <strong className="product-card__inventory">
            {!myProduct.inventory ? 0 : myProduct.inventory}
          </strong>
          left
        </p>
        <button className={buttonClass}>{buttonName}</button>
      </div>
    </div>
  );
};

export function renderProduct(products: Array<Card>) {
  return products.map((item) => (
    <ProductCard product={item} key={item.title}></ProductCard>
  ));
}

export default ProductCard;
