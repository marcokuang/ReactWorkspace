import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Card;
