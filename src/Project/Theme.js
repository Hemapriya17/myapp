import "../App.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";

function Theme() {
  const [colour, setColour] = useState(true);

  return (
    <div
      className="Theme"
      style={{
        backgroundColor: colour ? "white" : "black",
        color: colour ? "black" : "white",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <br />
      <h5>Change the Theme!</h5>
      <br />
      <span style={{ color: "RED", fontStyle: "italic", fontSize: "12px" }}>
        CLICK BELOW ICON
      </span>
      <br />
      <br />
      <div>
        {colour ? (
          <BsFillSunFill
            onClick={() => {
              setColour(!colour);
              console.log(colour);
            }}
          />
        ) : (
          <BsFillMoonStarsFill
            onClick={() => {
              setColour(!colour);
              console.log(colour);
            }}
          />
        )}
        &nbsp;{colour ? "Light" : "Dark"}
      </div>
    </div>
  );
}

export default Theme;
