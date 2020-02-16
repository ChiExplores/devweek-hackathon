import React, { useState } from "react";
import SideBar from "./SideBar";
import DisplayMap from "./DisplayMap";
import PopUp from "./PopUp";

const Mapped = () => {
  const [showModal, setShowModal] = useState(true);
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <PopUp show={showModal} handleClose={hideModal}>
        <h1>This Is A Pop-Up!</h1>
      </PopUp>
      <SideBar />
      <DisplayMap />
    </div>
  );
};

export default Mapped;
