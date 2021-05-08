import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  });

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>WIDTH x HEIGHT</h1>
      <p style={{ fontSize: "2rem" }}>
        {width} x {height}
      </p>
    </div>
  );
}

export default App;
