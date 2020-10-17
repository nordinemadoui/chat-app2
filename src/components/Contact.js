import React from "react";
import "./Contact.css";
import Proptypes from "prop-types";

const Contact = (props) => {
  return (
    <div className="Contact">
      <img src={props.img} alt={props.name} className="avatar" />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text"> {props.online ? "Online" : "Offline"} </p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: Proptypes.string.isRequired,
  img: Proptypes.string.isRequired,
  online: Proptypes.bool
};

export default Contact;
