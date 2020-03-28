import React from "react";
//import image from "../../images/vineyard.jpg";
//import "./Parallax.css";

function Parallax(props) {
  const { imageUrl, text, section } = props;

  const parallaxStyle = {
    alignItems: "center",
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    maxHeight: "80vh"
  };

  const contentStyle = {
    color: "#fff",
    fontSize: "80px",
    margin: "30% 0",
    textShadow: "2px 2px 4px #000000"
  };

  return (
    <div className="parallax" style={parallaxStyle} id={section}>
      <div className="content" style={contentStyle}>
        {text}
      </div>
    </div>
  );
}

export default Parallax;
