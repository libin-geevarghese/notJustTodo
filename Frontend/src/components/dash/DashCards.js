import React from "react";
import "./dashboard.css";

function DashCards(props) {
  return (
    <div className="dash-cards">
      <h1>{props.num}</h1>
      <h5>{props.title}</h5>
    </div>
  );
}

export default DashCards;
