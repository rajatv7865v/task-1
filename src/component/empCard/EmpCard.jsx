import React from "react";
import "./EmpCard.css";
import { FaUserCircle } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EmpCard = () => {
  const employee = [
    {
      name: "Lucas Sinclair",
      target: 70,
      pa: "300/340",
      branch: "Kukatpally",
      desig: "Counsellor",
      upd: 12,
      color: "rgba(156, 19, 135, 0.622)",
    },
    {
      name: "Lucas Sinclair",
      target: 70,
      pa: "300/340",
      branch: "Kukatpally",
      desig: "Counsellor",
      upd: 12,
      color: "rgba(85, 76, 213, 0.238)",
    },
    {
      name: "Lucas Sinclair",
      target: 70,
      pa: "300/340",
      branch: "Ameerpet",
      desig: "Counsellor",
      upd: 12,
      color: "rgba(28, 17, 190, 0.534)",
    },
  ];
  return (
    <div className="tableContainer ">
      <table className="table">
        <thead className="tabHead">
          <tr className="tabHeadBody">
            <th>NAME</th>
            <th>TARGETS</th>
            <th>PENDING APPLICATION</th>
            <th>BRANCH</th>
            <th>DESIGNATION</th>
            <th>UPDATES</th>
            <th></th>
          </tr>
        </thead>
        {employee.map((items, id) => {
          return (
            <tbody className="tabBody">
              <tr className="dataRow">
                <td className="firstCh">
                  <div className="firstIc">
                    <FaUserCircle size={35} />
                  </div>
                  <div className="firstNm">
                    <h4>{items.name}</h4>
                    <span>Yesterday</span>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      width: "10%",
                      height: "1rem",
                      paddingBottom: "0.5rem",
                      paddingLeft:'9rem'
                    }}
                  >
                    <CircularProgressbar value={60} text={"70%"} />
                  </div>
                </td>
                <td>{items.pa}</td>
                <td style={{ color: `${items.color}`, fontWeight: "bold" }}>
                  {items.branch}
                </td>
                <td>{items.desig}</td>
                <td>{items.upd}</td>
                <td
                  className="greaterIcon"
                  style={{ background: `${items.color}` }}
                >
                  <FaGreaterThan size={25} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default EmpCard;
