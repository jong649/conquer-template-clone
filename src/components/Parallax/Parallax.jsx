import React from "react";
//import image from "../../images/vineyard.jpg";
//import "./Parallax.css";

function Parallax(props) {
  const { imageUrl } = props;

  const style = {
    backgroundImage: `url(${imageUrl})`,
    minHeight: "85vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return <div className="parallax" style={style}></div>;
}

export default Parallax;
