import React from "react";
import style from "../css/Users.module.css";

const Users = () => {
    return (
        <div className={style.div_container}>
            <div className={style.center_div}>
                <div className={style.icons_div}>
                    <img src={require("../icons/persone.png")}></img>
                    <p className={style.title_p}>Staff Users</p>
                </div>
                <div>
                    <p className={style.value_p}>14</p>
                </div>
            </div>
        </div>
    );
};
    
export default Users;