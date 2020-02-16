import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SideBar from "./SideBar";
import DisplayMap from "./DisplayMap";
import PopUp from "./PopUp";

const Mapped = () => {
  let signatures = [
    { who: "Mayor's Office", status: "Signed" },
    { who: "Governor", status: "Signed" },
    { who: "President", status: "pending" }
  ];
  let data = [
    {
      location: "San Francisco",
      type: "Outbreak",
      population: 840000,
      status: "pending",
      reports: 1289092,
      resources: { nurses: 1200, beds: 14500, drugs: 30000 },
      signatures: signatures
    },
    {
      location: "Oakland",
      type: "Outbreak",
      population: 67000,
      status: "open",
      reports: 180,
      resources: { nurses: 12, beds: 10, drugs: 300 },
      signatures: signatures
    },
    {
      location: "San Jose",
      type: "Outbreak",
      population: 1100000,
      status: "open",
      reports: 178927,
      resources: { nurses: 12000, beds: 14500, drugs: 300000 },
      signatures: signatures
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState("Chicago");
  const [modalContent, setModalContent] = useState(<p>Empty Modal</p>);

  let handleMarker = city => {
    setState(Object.assign({}, { city: city }));
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const handleModalContent = obj => {
    let content = (
      <div>
        <h2 className="headings">{obj.location}</h2>
        <div className="row">
          <h3 className="col-3">Incedent Type</h3>
          <h3 className="col-3">Cases</h3> <h3 className="col-3">Population</h3>
        </div>
        <div className="row">
          <p className="col-3">{obj.type}</p>
          <p className="col-3">{obj.reports}</p>
          <p className="col-3">{obj.population}</p>
        </div>
        <h3 className="headings">Resources</h3>
        <div className="row">
          <p className="col-2">Nurses</p>
          <p className="col-2">{obj.resources.nurses}</p>
        </div>
        <div className="row">
          <p className="col-2">Hospital Beds</p>
          <p className="col-2">{obj.resources.beds}</p>
        </div>
        <div className="row">
          <p className="col-2">Antiviral Drugs</p>
          <p className="col-2">{obj.resources.drugs}</p>
        </div>
        <h3 className="headings">Workflow State</h3>
        {obj.signatures.map(sig => {
          return (
            <div className="row">
              <p className="col-2">{sig.who}</p>
              <p className="col-2">{sig.status}</p>
            </div>
          );
        })}
      </div>
    );

    setModalContent(Object.assign({}, content));
  };

  return (
    <div>
      <PopUp show={showModal} handleClose={hideModal}>
        <h1>{modalContent}</h1>
      </PopUp>
      <SideBar

        handleMarker={handleMarker}
        handleModalContent={handleModalContent}
        data={data}
      />
      <DisplayMap city={state} />
    </div>
  );
};


export default Mapped;
