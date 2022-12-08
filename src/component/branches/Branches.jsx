import React from "react";
import "./Branches.css";
import { RiAdminLine } from "react-icons/ri";

const Branches = () => {
  return (
    <div className="branchContainer">
      <div className="branch">
        <span>Our Branches</span>
      </div>
      <div className="buttonClass">
        <div className="buttonSection">
          <RiAdminLine />
          <span>  IMPORT LEADS</span>
        </div>
        <div className="buttonSection">
          <RiAdminLine />
          <span>ADD AGENT</span>
        </div>
        <div  className="buttonSection " style={{background:'blue',color:'white'}}>
          <RiAdminLine />
          <span>ADD STUDENT</span>
        </div>
      </div>
    </div>
  );
};

export default Branches;
