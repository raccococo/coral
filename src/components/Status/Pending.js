import React from "react";

const Pending = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "center", border: "solid 1px yellow", borderRadius: "10px", backgroundColor: "#374151", marginLeft: "30%", marginRight: "30%"}}>
            <div>
                <img src={require("../../icons/pending.png")}></img>
            </div>
            <div style={{marginLeft: "6px", color: "yellow"}}>
                <p>Pending</p>
            </div>
        </div>
        );
    };
    
export default Pending;