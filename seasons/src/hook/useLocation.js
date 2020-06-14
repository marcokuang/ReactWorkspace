import { useState, useEffect } from "react";

// initialize the props in the state

export default () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
      },
      (err) => {
        setErrMessage(err.message);
      }
    );
  }, []);
  // the empty array [] means only try to run the function once in total for the entire
  // life cycle

  // the community convention is to return a array in order to
  // consistently use array destructuring syntax

  return [lat, errMessage];
};
