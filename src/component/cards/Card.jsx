import React from "react";
import './Card.css'
import { RiAdminLine } from "react-icons/ri";

const Card = (props) => {
  const {name,person,application,leads,student,color}=props.item;
  // console.log("data is",name,application,color);
  return (
    <div className="cardContainer">
      <div className="childCardContainer">
        <div className="cardRight colorBor"
        style={{borderLeft:`0.5rem solid ${color}`}}>
          <h1>{name}</h1>
          <p>
            <span>APPLICATIONS</span>
            <span style={{color:'green'}}>+5</span>
          </p>
        </div>
        <div className="cardRight iconSec">
          <span >{person}</span>
          <span>
            <RiAdminLine />
          </span>
        </div>
      </div>
      <div className="cardMiddleSec">
        <span style={{fontWeight:'bold'}}>{application}</span>
        <span></span>
      </div>
      <div className="cardLastSec">
        <div className="studentSec ">
          <span>LEADS</span>
          <span style={{fontWeight:'bold'}}>{leads}</span>
        </div>
        <div className="lineSec">

        </div>
        <div className="studentSec ">
          <span>NEW STUDENTS</span>
          <span style={{fontWeight:'bold'}}>{student}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
