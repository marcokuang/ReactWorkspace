import React, { useState, useEffect } from "react";
import "../App.css";
import SeasonDisplay from "../SeasonDisplay";
import Spinner from "../Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errMessage] = useLocation();

  // the empty array [] means only try to run the function once in total for the entire
  // life cycle

  let content;
  if (errMessage) {
    content = <div>Error: {errMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }
  return <div className="border red">{content}</div>;
};

export default App;
