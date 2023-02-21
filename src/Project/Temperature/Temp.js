import { useState } from "react";
import Button from "@material-ui/core/Button";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Temp() {
  const [lat, setLat] = useState();
  // const [latchanged, setLatchanged]=useState(true)
  const [lon, setLon] = useState();
  const [datas, setDatas] = useState();

  const check = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db0c251b796cc781553661188c693865`
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  };

  return (
    <div className="App">
      <br />

      <header className="App-header">
        <span style={{ color: "Red", fontStyle: "italic", fontSize: "18px" }}>
          <p>Enter the Latitude and Longitude values</p>
        </span>
        <input
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <br /> <br />
        <Button variant="contained" color="primary" onClick={check}>
          Check Temperature&nbsp;&nbsp;&nbsp; <TiWeatherPartlySunny />
        </Button>
        <br />
        <br />
        <span style={{ color: "green", fontStyle: "italic", fontSize: "18px" }}>
          {datas ? (
            <p>
              Temperature at {datas.name} is {datas.main.temp}{" "}
            </p>
          ) : (
            <p>Temperature will be shown here </p>
          )}
        </span>
      </header>
    </div>
  );
}

export default Temp;
