import React from "react";
import Completed from "./Status/Completed";
import Pending from "./Status/Pending";
import Progress from "./Status/Progress";
import style from "../css/Table.module.css";

const Table = () => {
    return (
      <table>
        <tbody>
            <th className={style.top_th}>
                <td className={style.td_flex}>
                    ID
                </td>
                <td className={style.td_flex} >
                    USERNAME
                </td>
                <td className={style.td_flex}>
                    DATE & TIME
                </td>
                <td className={style.td_flex}>
                    AMOUNT
                </td>
                <td className={style.td_flex}>
                    STATUS
                </td>
            </th>
            <tr>
                <td className={style.td_flex}>
                    <p>12312</p>
                </td>
                <td className={style.td_flex}>
                    FEDERICOSCHI
                </td >
                <td className={style.td_gray}>
                    May 20, 2023 10:34:12
                </td>
                <td className={style.td_flex}>
                    120€
                </td>
                <td className={style.td_flex}>
                    <Completed />
                </td>
            </tr>
            <tr>
                <td className={style.td_flex}>
                    12311
                </td>
                <td className={style.td_flex}>
                    Feryzz
                </td >
                <td className={style.td_gray}>
                    May 20, 2023 09:12:43
                </td>
                <td className={style.td_flex}>
                    15€
                </td>
                <td className={style.td_flex}>
                    <Completed />
                </td>
            </tr>
            <tr>
                <td className={style.td_flex}>
                    12310
                </td>
                <td className={style.td_flex}>
                    Cinquanta
                </td >
                <td className={style.td_gray}>
                    May 20, 2023 04:44.02
                </td>
                <td className={style.td_flex}>
                    27€
                </td>
                <td className={style.td_flex}>
                    <Pending />
                </td>
            </tr>
            <tr>
                <td className={style.td_flex}>
                    12309
                </td>
                <td className={style.td_flex}>
                    NotAffected
                </td >
                <td className={style.td_gray}>
                    May 19, 2023 23:57:52
                </td>
                <td className={style.td_flex}>
                    59€
                </td>
                <td className={style.td_flex}>
                    <Progress />
                </td>
            </tr>
            <tr>
                <td className={style.td_flex}>
                    12308
                </td>
                <td className={style.td_flex}>
                    Ytnoos
                </td >
                <td className={style.td_gray}>
                    May 19, 2023 23:30:59
                </td>
                <td className={style.td_flex}>
                    12€
                </td>
                <td className={style.td_flex}>
                    <Completed />
                </td>
            </tr>
            <tr style={{borderRadius: "0 0 10px 10px"}}>
                <td className={style.td_flex}>
                    12307
                </td>
                <td className={style.td_flex}>
                    MattiaB22
                </td >
                <td className={style.td_gray}>
                    May 19, 2023 22:19:27
                </td>
                <td className={style.td_flex}>
                    33€
                </td>
                <td className={style.td_flex}>
                    <Completed />
                </td>
            </tr>
        </tbody>
      </table>
    );
  };
  
export default Table;
  