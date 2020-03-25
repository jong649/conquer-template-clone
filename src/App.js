import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import image1 from "./images/vineyard.jpg";
import image2 from "./images/glass.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax imageUrl={image1} />
      <div style={{ height: "800px", background: "darkgray" }}>
        <p>Here is more stuff</p>
      </div>
      <Parallax imageUrl={image2} />
      <div style={{ height: "800px", background: "darkgray" }}>
        <p>Even more stuff</p>
      </div>
    </div>
  );
}

export default App;
