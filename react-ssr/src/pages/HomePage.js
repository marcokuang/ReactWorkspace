import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div>Welcome to home page</div>
      <button
        onClick={() => {
          console.log("hellooooo");
        }}
      >
        Welcome
      </button>
    </div>
  );
};

export default {
  component: Home,
};
