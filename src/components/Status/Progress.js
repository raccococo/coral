import React from "react";

const Progress = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "left", border: "solid 1px purple", borderRadius: "10px", backgroundColor: "#374151", marginRight: "30%"}}>
            <div style={{marginLeft: "5px"}}>
                <img src={require("../../icons/cloud.png")}></img>
            </div>
            <div style={{marginLeft: "6px",marginRight: "5px", color: "purple"}}>
                <p>In Progress</p>
            </div>
        </div>
        );
    };
    
export default Progress;