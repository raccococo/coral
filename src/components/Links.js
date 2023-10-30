import React from "react";

const Link = () => {
    return (
      <div style={{display: "flex", alignItems: "center", backgroundColor: "#1f2a37", borderRadius: "10px", color: "#575f6c", marginLeft: "6%", marginRight: "77%", marginTop: "20px", fontSize: "12px"}}>
        <div style={{paddingLeft: "20px"}}>
          <img src={require("../icons/home.png")}></img>
        </div>
        <div style={{marginLeft: "10px"}}>
          <p>Control Panel</p>
        </div>
        <div style={{marginLeft: "10px", marginRight: "10px"}}>
          <p>{"   >   "}</p>
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
    );
  };
  
export default Link;
  