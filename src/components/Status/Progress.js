import React from "react";

const Progress = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "center", border: "solid 1px purple", borderRadius: "10px", backgroundColor: "#374151", marginLeft: "30%", marginRight: "30%"}}>
            <div>
                <img src={require("../../icons/cloud.png")}></img>
            </div>
            <div style={{marginLeft: "6px", color: "purple"}}>
                <p>In Progress</p>
            </div>
        </div>
        );
    };
    
export default Progress;