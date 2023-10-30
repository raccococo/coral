import React from "react";

const Four_Blocks = () => {
    return (
      <div style={{display: "flex", color: "white", justifyContent: "center"}}>
        <div style={{display: "flex",flexDirection:"column", alignItems: "center", flex: "0.18", justifyContent: "center", backgroundColor: "#1f2a37", borderRadius: "10px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/persone.png")}></img>
                <p style={{fontSize: "18px", paddingLeft: "20px"}}>Staff Users</p>
            </div>
            <div>
                <p style={{fontSize: "24px", margin: "auto", paddingBottom: "15px"}}>14</p>
            </div>
        </div>
        <div style={{display: "flex",flexDirection:"column", alignItems: "center", flex: "0.18", justifyContent: "center", backgroundColor: "#1f2a37", marginLeft: "100px", borderRadius: "10px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/money.png")}></img>
                <p style={{fontSize: "18px", paddingLeft: "20px"}}>Total in Sales</p>
            </div>
            <div>
                <p style={{fontSize: "24px", margin: "auto"}}>200.000 EUR</p>
            </div>
            <div>
                <p style={{fontSize: "12px", margin: "auto", paddingBottom: "15px", color: "#575f6c"}}>All Time</p>
            </div>
        </div>
        <div style={{display: "flex",flexDirection:"column", alignItems: "center", flex: "0.18", justifyContent: "center", backgroundColor: "#1f2a37", marginLeft: "100px", borderRadius: "10px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/calendar.png")}></img>
                <p style={{fontSize: "18px", paddingLeft: "20px"}}>Total in Sales</p>
            </div>
            <div>
                <p style={{fontSize: "24px", margin: "auto"}}>200.000 EUR</p>
            </div>
            <div>
                <p style={{fontSize: "12px", margin: "auto", paddingBottom: "15px", color: "#575f6c"}}>Current Month</p>
            </div>
        </div>
        <div style={{display: "flex",flexDirection:"column", alignItems: "center", flex: "0.20", justifyContent: "center", backgroundColor: "#1f2a37", marginLeft: "100px", borderRadius: "10px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/back.png")}></img>
                <p style={{fontSize: "18px", paddingLeft: "20px"}}>Avarage Payment</p>
            </div>
            <div>
                <p style={{fontSize: "24px", margin: "auto"}}>13 EUR</p>
            </div>
            <div>
                <p style={{fontSize: "12px", margin: "auto", paddingBottom: "15px", color: "#575f6c"}}>Current Month</p>
            </div>
        </div>
      </div>
    );
  };
  
export default Four_Blocks;