import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Booking } from "./booking";
import { Checklist } from "./checklist";

import { Home } from "./home";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/checklist" element={<Checklist />} />
        </Routes>
      </Router>
    </>
  );
}
