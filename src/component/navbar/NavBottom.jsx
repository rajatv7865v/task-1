import React from "react";
import "./NavBottom.css";

const NavBottom = () => {
  return (
    <div className="list-container">
      <h2>Workspace</h2>
      <div className="list" >
        <span>Dashboard</span>
        <span>Students</span>
        <span>Appspancations</span>
        <span>Agents</span>
        <span>Employes</span>
        <span>Finance</span>
        <span>Reports</span>
        <span>Marketing</span>
      </div>
      <div className="user">
        <span>Rajat Verma</span>

      </div>
    </div>
  );
};

export default NavBottom;
