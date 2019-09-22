import React from "react";
import "./Alert.css";

const Alert = ({ alert, removeAlert }) => {
  return (
    alert !== null && (
      <div className="row">
        <div className="col s12">
          <div className={`info ${alert.type}`}>
            <span>
              <i className="fas fa-info-circle"></i> {alert.msg}
            </span>
            <i className="fas fa-times-circle" onClick={removeAlert}></i>
          </div>
        </div>
      </div>
    )
  );
};

export default Alert;
