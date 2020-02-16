import React from "react";
import { NavLink, Link } from "react-router-dom";
import SideBar from "./SideBar";
import DisplayMap from "./DisplayMap";

const Mapped = (props) => {
  return (
    <div>
      <SideBar />
      <DisplayMap />
    </div>
  );
};

export default Mapped;
