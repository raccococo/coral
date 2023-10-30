import React from "react";

const Completed = () => {
    return (
        <div style={{display: "flex", alignItems: "center",justifyContent: "center", border: "solid 1px green", borderRadius: "10px", backgroundColor: "#374151", marginLeft: "30%", marginRight: "30%"}}>
            <div>
                <img src={require("../../icons/check.png")}></img>
            </div>
            <div style={{marginLeft: "6px", color: "green"}}>
                <p>Completed</p>
            </div>
        </div>
        );
    };
    
export default Completed;
    