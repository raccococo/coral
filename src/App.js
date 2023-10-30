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
                <Table />
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
