import React, { useState } from "react";

const Side_NavBar = () => {
  return (
    <div style={{ flexGrow: 0.15, justifyContent: "center", alignItems: "center", color: "white" }}>
      <table style={{backgroundColor: "#1f2a37", height: "100vh", width: "100%"}}>
        <thead style={{ display: "flex", justifyContent: "center" }}>
          <tr style={{marginTop: "40%"}}>
            <th>CoralMC</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Side_NavBar;
