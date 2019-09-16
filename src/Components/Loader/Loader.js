import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "rgba(0,0,0,.8)",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
