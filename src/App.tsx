import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import DevPortfolio from "./pages/DevPortfolio";
import PhotoPortfolio from "./pages/PhotoPortfolio";

const Redirect = function () {
  window.location.href = "/portfolio/dev";

  return null;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" Component={Redirect} />
        <Route path="/portfolio/photo" Component={PhotoPortfolio} />
        <Route path="/portfolio/dev" Component={DevPortfolio} />
      </Routes>
    </Router>
  );
}
