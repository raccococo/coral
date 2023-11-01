import React from "react";
import style from "../css/Four_blocks.module.css";

const Four_Blocks = () => {
    return (
      <div className={style.container}>
        <div className={style.other_container_div}>
            <div className={style.staff_users_icon_div}>
                <img src={require("../icons/persone.png")}></img>
                <p className={style.container_title}>Staff Users</p>
            </div>
            <div>
                <p className={style.first_p_value}>14</p>
            </div>
        </div>
        <div className={style.other_container_div}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/money.png")}></img>
                <p className={style.container_title}>Total in Sales</p>
            </div>
            <div>
                <p className={style.p_value}>200.000 EUR</p>
            </div>
            <div>
                <p className={style.little_gray_words}>All Time</p>
            </div>
        </div>
        <div className={style.other_container_div}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/calendar.png")}></img>
                <p className={style.container_title}>Total in Sales</p>
            </div>
            <div>
                <p className={style.p_value}>200.000 EUR</p>
            </div>
            <div>
                <p className={style.little_gray_words}>Current Month</p>
            </div>
        </div>
        <div className={style.other_container_div}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/back.png")}></img>
                <p className={style.container_title}>Avarage Payment</p>
            </div>
            <div>
                <p className={style.p_value}>13 EUR</p>
            </div>
            <div>
                <p className={style.little_gray_words}>Current Month</p>
            </div>
        </div>
      </div>
    );
  };
  
export default Four_Blocks;