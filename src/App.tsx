import "./App.css";
import DevPortfolio from "./pages/DevPortfolio";
import PhotoPortfolio from "./pages/PhotoPortfolio";
import { useState } from "react";

const getLastOpenedPage = () => {
  const lastOpenedPage = localStorage.getItem("lastOpenedPage");
  if (lastOpenedPage) return JSON.parse(lastOpenedPage);

  localStorage.setItem("lastOpenedPage", JSON.stringify(true));
  return true;
};

export default function App() {
  const [isDev, setIsDev] = useState(getLastOpenedPage());

  const togglePage = (bool: boolean) => {
    setIsDev(bool);
    localStorage.setItem("lastOpenedPage", JSON.stringify(bool));
  };

  return isDev ? (
    <DevPortfolio setIsDev={togglePage} />
  ) : (
    <PhotoPortfolio setIsDev={togglePage} />
  );
}
