import React, { useState } from "react";
import Temp from "./Temp";
import Tempp from "./Tempp";
import Button from "@material-ui/core/Button";
import RouteChangeTracker from "../../RouteChangeTracker";

export default function Weather() {
  const [change, setChange] = useState("");

  return (
    <div style={{marginLeft:"20px"}}>
      <RouteChangeTracker/>
      <br />
      <span style={{ color: "#9B2A65", fontSize: "19px" }}>
        <marquee direction="" scrollamount="10">
          Welcome you all to the Weather forcasting!
        </marquee>
      </span>
      <p>
        If you know the Latitude and Longitude
        <br /> <br />
        <span style={{ color: "#47CF73", fontSize: "16px" }}>
          Click this button!
        </span>{" "}
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setChange("coordinates")}
      >
        Climate
      </Button>
      <br />
      {change === "coordinates" ? <Temp /> : null} <br />
      <br />
      <p>
        If you want to know the Temperature of your location <br /> <br />
        <span style={{ color: "#47CF73", fontSize: "16px" }}>
          Click this button!
        </span>
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setChange("location")}
      >
        Location
      </Button>
      {change === "location" ? <Tempp /> : null}
    </div>
  );
}
