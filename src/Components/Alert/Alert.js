import React, { useContext } from "react";
import { GithubContext } from "../../contexts/GithubContext";
import "./Alert.css";

const Alert = () => {
  const { alert, removeAlert } = useContext(GithubContext);

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
