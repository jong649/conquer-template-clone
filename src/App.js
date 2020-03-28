import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Card from "./components/Card/Card";
import image1 from "./images/vineyard.jpg";
import image2 from "./images/glass.jpg";
import cardImage1 from "./images/cheers.jpg";
import cardImage2 from "./images/grape-hands.jpg";
import cardImage3 from "./images/barrels.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax imageUrl={image1} text={"Homepage"} section={"Homepage"} />
      <div className="card-container">
        <Card
          content={"Here is some lovely content for this beautiful card"}
          image={cardImage1}
          color={"#991242"}
        />
        <Card
          content={"Here is some lovely content for this beautiful card"}
          image={cardImage2}
          color={"#991242"}
        />
        <Card
          content={"Here is some lovely content for this beautiful card"}
          image={cardImage3}
          color={"#991242"}
        />
      </div>
      <Parallax imageUrl={image2} text={"About Us"} section={"About us"} />
      <div className="card-container">
        <p>Even more stuff</p>
      </div>
    </div>
  );
}

export default App;
