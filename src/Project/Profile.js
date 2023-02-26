import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import RouteChangeTracker from "../../RouteChangeTracker";

function Profile() {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
        backgroundColor: "#F8E2E7",
      }}
    >
      <RouteChangeTracker/>
      <Card
        style={{
          height: "300px",
          width: "500px",
          backgroundColor: "#F4F3E9",
          textAlign: "center",
        }}
      >
        <CardContent>
          <span style={{ textAlign: "center" }}>
            <span style={{ fontSize: "15px", color: "black" }}>
              Hello World!
            </span>
            <br />
            <br />
            <span style={{ fontSize: "15px", color: "black" }}>
              My name is{" "}
            </span>
            <span style={{ fontSize: "30px", color: "#9B2A65" }}>
              HEMAPRIYADHARSHINI
            </span>
          </span>
          <br />
          <br />
          <span style={{ color: "black", fontSize: "20px" }}>
            &nbsp; &nbsp; I am a front end{" "}
            <span style={{ color: "#DC143B", fontSize: "20px" }}>
              Web Developer;
            </span>
            <br />
          </span>
          <br />
          &nbsp; &nbsp; &nbsp;I'm from Pondicherry. I like to Design and build
          in User Interface. Now, I'm Working at{" "}
          <span style={{ color: "#33AC6E", fontSize: "20px" }}>
            Learny Technologies{" "}
          </span>
          as a Web Developer
          <br />
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
