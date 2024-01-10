import { useState } from "react";

import DevPortfolio from "./pages/DevPortfolio";
import PhotoPortfolio from "./pages/PhotoPortfolio";

// Different way to import pages, using React.lazy, better for performance, but removes the ability to use the ParallaxProvider
// const DevPortfolio = lazy(() => import("./pages/DevPortfolio"));
// const PhotoPortfolio = lazy(() => import("./pages/PhotoPortfolio"));

import "./App.css";

/**
 * @description - Gets the last opened page from local storage
 * @returns {boolean} - Returns the last opened page
 */
const getLastOpenedPage = () => {
  // Check if the last opened page is in local storage
  const lastOpenedPage = localStorage.getItem("lastOpenedPage");
  // If it is, return it
  if (lastOpenedPage) return JSON.parse(lastOpenedPage);
  // If it isn't, set it to true and return true
  localStorage.setItem("lastOpenedPage", JSON.stringify(true));
  return true;
};

export default function App() {
  // State to determine which page to show, allowing for a One Page Portfolio
  const [isDev, setIsDev] = useState(getLastOpenedPage());

  /**
   * @description - Toggles the page between the Dev Portfolio and the Photo Portfolio
   * @param bool - The boolean to set the page to
   */
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
