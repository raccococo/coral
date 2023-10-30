import React from "react";
import Completed from "./Status/Completed";
import Pending from "./Status/Pending";
import Progress from "./Status/Progress";

const Table = () => {
    return (
      <table style={{width: "100%", paddingRight: "6%", paddingLeft: "6%", fontSize: "12px"}}>
        <thead>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#374151", borderRadius: "10px 10px 0 0", paddingTop: "15px", paddingBottom: "15px"}}>
                <td style={{flex: "0.2"}}>
                    ID
                </td>
                <td style={{flex: "0.2"}}>
                    USERNAME
                </td>
                <td style={{flex: "0.2"}}>
                    DATE & TIME
                </td>
                <td style={{flex: "0.2"}}>
                    AMOUNT
                </td>
                <td style={{flex: "0.2"}}>
                    STATUS
                </td>
            </th>
        </thead>
        <tbody>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37"}}>
                <td style={{flex: "0.2"}}>
                    12312
                </td>
                <td style={{flex: "0.2"}}>
                    FEDERICOSCHI
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 20, 2023 10:34:12
                </td>
                <td style={{flex: "0.2"}}>
                    120€
                </td>
                <td style={{flex: "0.2"}}>
                    <Completed />
                </td>
            </th>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37"}}>
                <td style={{flex: "0.2"}}>
                    12311
                </td>
                <td style={{flex: "0.2"}}>
                    Feryzz
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 20, 2023 09:12:43
                </td>
                <td style={{flex: "0.2"}}>
                    15€
                </td>
                <td style={{flex: "0.2"}}>
                    <Completed />
                </td>
            </th>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37"}}>
                <td style={{flex: "0.2"}}>
                    12310
                </td>
                <td style={{flex: "0.2"}}>
                    Cinquanta
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 20, 2023 04:44.02
                </td>
                <td style={{flex: "0.2"}}>
                    27€
                </td>
                <td style={{flex: "0.2"}}>
                    <Pending />
                </td>
            </th>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37"}}>
                <td style={{flex: "0.2"}}>
                    12309
                </td>
                <td style={{flex: "0.2"}}>
                    NotAffected
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 19, 2023 23:57:52
                </td>
                <td style={{flex: "0.2"}}>
                    59€
                </td>
                <td style={{flex: "0.2"}}>
                    <Progress />
                </td>
            </th>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37"}}>
                <td style={{flex: "0.2"}}>
                    12308
                </td>
                <td style={{flex: "0.2"}}>
                    Ytnoos
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 19, 2023 23:30:59
                </td>
                <td style={{flex: "0.2"}}>
                    12€
                </td>
                <td style={{flex: "0.2"}}>
                    <Completed />
                </td>
            </th>
            <th style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1f2a37", borderRadius: "0 0 10px 10px"}}>
                <td style={{flex: "0.2"}}>
                    12307
                </td>
                <td style={{flex: "0.2"}}>
                    MattiaB22
                </td >
                <td style={{flex: "0.2", color: "gray"}}>
                    May 19, 2023 22:19:27
                </td>
                <td style={{flex: "0.2"}}>
                    33€
                </td>
                <td style={{flex: "0.2"}}>
                    <Completed />
                </td>
            </th>
        </tbody>
      </table>
    );
  };
  
export default Table;
  