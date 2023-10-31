import React from "react";

const Pending = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "left", border: "solid 1px yellow", borderRadius: "10px", backgroundColor: "#374151", marginRight: "30%"}}>
            <div style={{marginLeft: "10px"}}>
                <img src={require("../../icons/pending.png")}></img>
            </div>
            <div style={{marginLeft: "6px", marginRight: "10px", color: "yellow"}}>
                <p>Pending</p>
            </div>
        </div>
        );
    };
    
export default Pending;