import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SideBar from "./SideBar";
import DisplayMap from "./DisplayMap";

const Mapped = (props) => {
  const [state, setState] = useState('Chicago');

  let handleMarker = (city) => {
    setState(Object.assign({}, { city: city }));
    console.log(state)
  };

  return (
    <div>
      <SideBar
        handleMarker={handleMarker}
      />
      <DisplayMap
        city={state}
      />
    </div>
  );
};

export default Mapped;
