import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = props => {
  let mapkey = 0;
  let activeEvents = props.data.map(obj => {
    mapkey++;
    let color = obj.status === "pending" ? "orange" : "blue";
    return (
      <li
        onClick={() => {
          props.handleMarker(obj.location);
          props.handleModalContent(obj);
        }}
        key={mapkey}
        className="blocklist"
      >
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

  let processingEvents = props.data
    .filter(obje => {
      return obje.status === "pending";
    })
    .map(obj => {
      mapkey++;
      let color = obj.status === "pending" ? "orange" : "blue";
      return (
        <li
          onClick={() => {
            props.handleMarker(obj.location);
            props.handleModalContent(obj);
          }}
          key={mapkey}
          className="blocklist"
        >
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
      <ul>
        {props.location === "outbreaks" ? processingEvents : activeEvents}
      </ul>
    </div>
  );
};

export default SideBar;
