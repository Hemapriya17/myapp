import Theme from "./Project/Theme";
import Weather from "./Project/Temperature/Weather";
import Navbar from "./Navbar";
import Profile from "./Project/Profile";
import Todo from "./Project/Todo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import RouteChangeTracker from "./RouteChangeTracker";

const TRACKING_ID = "UA-251235741-1";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <RouteChangeTracker/>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/profile" element={<Profile />}></Route>

          <Route exact path="/weather" element={<Weather />}></Route>

          <Route exact path="/theme" element={<Theme />}></Route>

          <Route exact path="/todo" element={<Todo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
