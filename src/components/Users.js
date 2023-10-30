import React from "react";

const Users = () => {
    return (
        <div style={{display: "flex", backgroundColor: "#1f2a37", height: "85%", width: "60%", marginLeft: "100px", marginTop: "20px"}}>
            <div style={{flex: "1",display: "flex",flexDirection:"column", alignItems: "center", justifyContent: "center", backgroundColor: "#1f2a37", borderRadius: "10px"}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src={require("../icons/persone.png")}></img>
                    <p style={{fontSize: "18px", paddingLeft: "20px"}}>Staff Users</p>
                </div>
                <div>
                    <p style={{fontSize: "24px", margin: "auto", paddingBottom: "15px"}}>14</p>
                </div>
            </div>
        </div>
    );
};
    
export default Users;