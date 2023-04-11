import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./home";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
