import React from "react";
import Side_NavBar from "./components/Side_NavBar";
import Link from "./components/Links";
import Four_Blocks from "./components/Four_Blocks";
import Table from "./components/Table";
import Users from "./components/Users";

function App() {
  return (
    <div style={{backgroundColor: "#111827", width: "100vw", height: "100vh", fontFamily: "Sans-serif"}}>
        <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
          <Side_NavBar />
          <div style={{ flexGrow: 0.92 }}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
              <div style={{ flex: "0.8"}}>
                <Link />
              </div>
              <div style={{ flex: "1.5", color: "white"}}>
                <Four_Blocks />
              </div>
              <div style={{ flex: "2.5", color: "white"}}>
                <Table
                  products={[
                    { id: 12312, username: "FEDERICOSCHI", dateAndTime: "1684571652000", amount: 120, status: 1 },
                    { id: 12311, username: "Feryzz", dateAndTime: "1684566763000", amount: 15, status: 1 },
                    { id: 12310, username: "Cinquanta", dateAndTime: "1684550642000", amount: 27, status: 2 },
                    { id: 12309, username: "NotAffected", dateAndTime: "1684533472000", amount: 59, status: 3 },
                    { id: 12308, username: "Ytnoos", dateAndTime: "1684531859000", amount: 12, status: 1 },
                    { id: 12307, username: "MattiaB22", dateAndTime: "1684527567000", amount: 33, status: 1 },
                  ]}
                />
              </div>
              <div style={{ flex: "5", color: "white"}}>
                <Users />
              </div>
            </div>
          </div>
        </div> 
    </div>
  );
}

export default App;
