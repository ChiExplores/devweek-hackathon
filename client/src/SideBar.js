import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = (props) => {

  let data = [
    { location: "San Francisco", population: 840000, status: "pending" },
    { location: "Oakland", population: 67000, status: "open" },
    { location: "San Jose", population: 1100000, status: "open" }
  ];

  let mapkey = 0;
  let activeEvents = data.map(obj => {
    mapkey++;
    let color = obj.status === 'open' ? 'blue' : 'orange';
    return (
      <li onClick={() => props.handleMarker(obj.location)} key={mapkey} className="blocklist">
        <div className="info-top-block">
          <h2 className="info-city">{obj.location}</h2>
          <p className="info-pop">{obj.population}</p>
        </div>
        <p className="info-status" style={{ color: color }}>
          {obj.status}
        </p>
        <hr />
      </li>
    );
  });

  return (
    <div className="sidebar-container">
      <div className="links-bar">
        <NavLink
          activeClassName="is-active"
          to="/outbreaks"
          className="link-buttons"
        >
          Outbreaks
        </NavLink>
        <NavLink
          activeClassName="is-active"
          to="/reported"
          className="link-buttons"
        >
          Reported Cases
        </NavLink>
      </div>
      <ul>{activeEvents}</ul>
    </div>
  );
};

export default SideBar;
