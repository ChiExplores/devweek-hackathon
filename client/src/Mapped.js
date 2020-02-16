import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SideBar from "./SideBar";
import DisplayMap from "./DisplayMap";
import PopUp from "./PopUp";


const Mapped = () => {
  const [showModal, setShowModal] = useState(true);
  const [state, setState] = useState('Chicago');
  
  let handleMarker = (city) => {
   setState(Object.assign({}, { city: city }));
  };
  
  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <PopUp show={showModal} handleClose={hideModal}>
        <h1>This Is A Pop-Up!</h1>
      </PopUp>
      <SideBar
       handleMarker={handleMarker}
      />
      <DisplayMap
        city={state}
      />
    
}

export default Mapped;
