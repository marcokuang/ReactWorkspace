import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/_base.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Details from "./components/Details";
import Progress from "./components/Progress";
import Modal from "./components/Modal";

function App() {
  const [showedModal, setShowedModal] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <Navigation
        showedModal={showedModal}
        toggleModal={setShowedModal}
      ></Navigation>
      <Progress></Progress>

      <Details></Details>
      <Modal isShown={showedModal} toggleModal={setShowedModal} />
    </div>
  );
}

export default App;
