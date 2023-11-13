import React from "react";
import EventCards from "./EventCards";
import "./events.css";

function Events() {
  return (
    <div className="events">
      <div className="events-container">
        <span>
          <input type="text" autoComplete="off" />
          <button>Search Events</button>
        </span>
        <EventCards name={"All Events"} />
      </div>

      <div className="events-container">
        <EventCards name={"Today"} />
        <EventCards name={"Upcoming"} />

        <EventCards name={"Important"} />
      </div>
      <div className="events-container">
        <EventCards name={"Missed"} />
        <EventCards name={"Archieved"} />
        <EventCards name={"Completed"} />
      </div>
    </div>
  );
}

export default Events;
