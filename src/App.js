import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Textform from "./components/Textform";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#e9ecef";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Enter the text to analyze" /> {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
