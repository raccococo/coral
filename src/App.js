import React from "react";
import Side_NavBar from "./components/Side_NavBar";
import Link from "./components/Links";
import Four_Blocks from "./components/Four_Blocks";
import Table from "./components/Table";
import Users from "./components/Users";
import style_app from "./App.module.css";

function App() {
  return (
    <div className={style_app.background}>
        <div className={style_app.side_navbar_flex}>
          <Side_NavBar />
          <div className={style_app.right_block}>
            <div className={style_app.flex_right_block}>
              <div className={style_app.flex_link}>
                <Link />
              </div>
              <div className={style_app.flex_four_blocks}>
                <Four_Blocks />
              </div>
              <div className={style_app.flex_table}>
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
              <div className={style_app.flex_users}>
                <Users />
              </div>
            </div>
          </div>
        </div> 
    </div>
  );
}

export default App;
