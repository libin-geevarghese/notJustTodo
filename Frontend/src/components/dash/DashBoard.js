import React from "react";
import "./dashboard.css";
import DashCards from "./DashCards";

function Dash() {
  return (
    <div className="dash">
      <div className="dashBanner">
        <DashCards title={"Total Events"} num={"24"} />
        <DashCards title={"Events Today"} num={"3"} />
        <DashCards title={"Important Events"} num={"4"} />
        <DashCards title={"Upcoming Events"} num={"10"} />
        <DashCards title={"Missed Events"} num={"2"} />
      </div>
      <div className="dash-contents">
        {/* Need to make components for following */}
        <div className="dash-items">
          <p>Dubai</p>
          <p>23/05/2023 </p> <p> Saturday 12:35 Am </p> <p>32 C </p>{" "}
          <div className="dash-toggle-btn">
            <button type="button"> {"<"} </button>
            <button type="button"> My Locations </button>
            <button type="button"> {">"} </button>
          </div>
        </div>
        {/* Need to make components for following */}
        <div className="dash-items">
          <h6> Event Heading or title Lorem ipsum del amoto</h6>
          <h6> Lorem ipsum Event Heading or title amoto del</h6>
          <h6> Event title or Heading Lorem ipsum moto dela</h6>
          <h6> Ipsum Lorem Event Heading or title mode tola</h6>

          <div className="dash-toggle-btn">
            <button type="button"> {"<"} </button>
            <button type="button"> Important Events </button>
            <button type="button"> {">"} </button>
          </div>
        </div>
        <div className="dash-graphs">
          <h5> Today</h5>
          <h1>graphs</h1>
          <br></br>
          <br></br>
          <div className="dash-toggle-btn">
            <button type="button"> {"<"} </button>

            <button type="button"> {">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
