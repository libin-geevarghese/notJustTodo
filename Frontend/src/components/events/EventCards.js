import React from "react";
import "./events.css";

function EventCards(props) {
  return (
    <div className="cards">
      <h4>{props.name}</h4>
    </div>
  );
}

export default EventCards;
