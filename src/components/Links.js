import React from "react";
import style from "../css/Links.module.css";

const Link = () => {
    return (
      <div className={style.div_container} >
        <div className={style.icons_padding}>
          <img src={require("../icons/home.png")}></img>
        </div>
        <div className={style.margin_left}>
          <p>Control Panel</p>
        </div>
        <div className={style.margin_left_right}>
          <p>{"   >   "}</p>
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
    );
  };
  
export default Link;
  