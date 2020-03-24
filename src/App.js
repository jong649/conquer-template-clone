import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <div style={{ height: "800px", background: "red" }}>
        <p>Here is more stuff</p>
      </div>
    </div>
  );
}

export default App;
