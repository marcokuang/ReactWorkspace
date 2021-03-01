import React from "react";
import { Card } from "../interface";
import { renderProduct } from "./ProductCard";
import "../styles/details.scss";

const Details = () => {
  const cards: Array<Card> = [
    {
      title: "Bamboo Stand",
      price: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      inventory: 101,
    },
    {
      title: "Black Edition Stand",
      price: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      inventory: 64,
    },
    {
      title: "Mahogany Special Edition",
      price: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      inventory: 0,
    },
  ];

  let products = renderProduct(cards);

  return (
    <div className="details">
      <h2>About this project</h2>

      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      {products}
    </div>
  );
};

export default Details;
