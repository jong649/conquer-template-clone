import React from "react";

function Card(props) {
  const { content, image } = props;

  const imageStyle = {
    height: "auto",
    maxHeight: "209px",
    maxWidth: "100%",
    minWidth: "313px"
  };
  const contentStyle = {
    background: "#f2f2f2",
    margin: "15px",
    paddingBottom: "40px",
    textAlign: "center",
    width: "33.3%"
  };
  const buttonStyle = {
    background: "green",
    borderRadius: "5px",
    color: "#fff",
    padding: "10px 30px",
    textDecoration: "none"
  };
  return (
    <div style={contentStyle}>
      <img src={image} alt="clinking glasses" style={imageStyle} />
      <h2>Header here</h2>
      <p>{content}</p>
      <a href="#" style={buttonStyle}>
        Green Button
      </a>
    </div>
  );
}

export default Card;
