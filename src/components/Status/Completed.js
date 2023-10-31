import React from "react";

const Completed = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "left", border: "solid 1px green", borderRadius: "10px", backgroundColor: "#374151", marginRight: "30%"}}>
            <div style={{marginLeft: "5px"}}>
                <img src={require("../../icons/check.png")}></img>
            </div>
            <div style={{marginLeft: "6px",marginRight: "5px", color: "green"}}>
                <p>Completed</p>
            </div>
        </div>
        );
    };
    
export default Completed;
    