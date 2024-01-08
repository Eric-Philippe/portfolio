import "./App.css";
import DevPortfolio from "./pages/DevPortfolio";
import PhotoPortfolio from "./pages/PhotoPortfolio";
import { useState } from "react";

export default function App() {
  const [isDev, setIsDev] = useState(true);

  return isDev ? (
    <DevPortfolio setIsDev={setIsDev} />
  ) : (
    <PhotoPortfolio setIsDev={setIsDev} />
  );
}
