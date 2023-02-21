import { useState } from "react";
import Button from "@material-ui/core/Button";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Tempp() {
  const [name, setName] = useState();
  // const [namechanged, setNamechanged]=useState(true)

  const [dat, setDat] = useState();

  const checks = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=db0c251b796cc781553661188c693865`
    )
      .then((res) => res.json())
      .then((data) => setDat(data));
  };

  return (
    <div className="App">
      <br />

      <header className="App-header">
        <br />
        <span style={{ color: "Red", fontStyle: "italic", fontSize: "18px" }}>
          <p>Enter the Location name</p>
        </span>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <Button variant="contained" color="primary" onClick={checks}>
          Check Temperature &nbsp;&nbsp;&nbsp; <TiWeatherPartlySunny />
        </Button>
        <br />
        <br />
        <span style={{ color: "green", fontStyle: "italic", fontSize: "18px" }}>
          {dat ? (
            <p>
              Temperature at {name} is {dat.main.temp}{" "}
            </p>
          ) : (
            <p>Temperature will be shown here</p>
          )}

          {/* <img width="100%" src="Sky.jpeg"></img> */}
        </span>
      </header>
    </div>
  );
}

export default Tempp;
