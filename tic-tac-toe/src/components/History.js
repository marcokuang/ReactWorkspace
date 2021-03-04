import React from "react";

const History = (props) => {
  let buttons = [];
  for (let i = 0; i < props.history; i++) {
    let button = (
      <button
        onClick={() => {
          props.onClick(i);
        }}
        key={i}
      >
        Go back to Step {i}
      </button>
    );
    buttons.push(button);
  }

  return <div className="history-buttons">{buttons}</div>;
};

export default History;
