import React, { useState } from "react";
import style from "../css/Side_Navbar.module.css";

const Side_NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (menuNumber) => {
    if (openMenu === menuNumber) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuNumber);
    }
  };

  return (
    <div className={style.div_container}>
      <ul>
        <span>
          CoralMC
        </span>
        <li className={style.control_panel}>
          <img src={require("../icons/home.png")}></img>
          <p>Control Panel</p>
        </li>
        <li className={style.other}>
          <div className={style.other}>
            <img src={require("../icons/variable.png")}></img>
            <p>Variables</p>
          </div>
        </li>
        <li onClick={() => toggleMenu(1)} className={style.settings_menu}>
          <div>
            <div className={style.dropdown}>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/potion.png")}></img>
                <p >Settings</p>
              </div>
              <img src={require("../icons/freccia.png")}></img>
            </div>
            <div className={style.dropdown_menu} style={{flexDirection: "column" ,display: openMenu === 1 ? 'flex' : 'none' }}>
              <p>Settings 1</p>
              <p>Settings 2</p>
            </div>
          </div>
        </li>
        <li onClick={() => toggleMenu(2)} className={style.settings_menu}>
          <div>
            <div className={style.dropdown}>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/offer.png")}></img>
                <p >Discounts</p>
              </div>
              <img src={require("../icons/freccia.png")}></img>
            </div>
            <div className={style.dropdown_menu} style={{flexDirection: "column" ,display: openMenu === 2 ? 'flex' : 'none' }}>
              <p>Discounts 1</p>
              <p>Discounts 2</p>
            </div>
          </div>
        </li>
        <li onClick={() => toggleMenu(3)} className={style.settings_menu}>
          <div>
            <div className={style.dropdown}>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={require("../icons/imac.png")}></img>
                <p >Pages & CMS</p>
              </div>
              <img src={require("../icons/freccia.png")}></img>
            </div>
            <div className={style.dropdown_menu} style={{flexDirection: "column" ,display: openMenu === 3 ? 'flex' : 'none' }}>
              <p>Pages & CMS 1</p>
              <p>Pages & CMS 2</p>
            </div>
          </div>
        </li>
        <hr></hr>
        <li className={style.other}>
          <div className={style.other}>
            <img src={require("../icons/docs.png")}></img>
            <p>Docs</p>
          </div>
        </li>
        <li className={style.other}>
          <div className={style.other}>
            <img src={require("../icons/link.png")}></img>
            <p>Dashboard</p>
          </div>
        </li>
        <li className={style.other}>
          <div className={style.other}>
            <img src={require("../icons/lifebuoy.png")}></img>
            <p>Help</p>
          </div>
        </li>
      </ul>
      <div style={{height: "5vh", backgroundColor: "rgb(31, 42, 55)", margin: "0", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src={require("../icons/mixer.png")}></img>
        <img src={require("../icons/pianeta.png")}></img>
        <img src={require("../icons/settings.png")}></img>
      </div>
    </div>
  );
};

export default Side_NavBar;
