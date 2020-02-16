import React from "react";
import ReactDOM from "react-dom";
import "./PopUp.css";

const PopUp = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="pop-button" onClick={handleClose}>
          close
        </button>
        <button
          className="pop-button"
          onClick={() => {
            return true;
          }}
        >
          Request Resources
        </button>
      </section>
    </div>
  );
};

export default PopUp;
