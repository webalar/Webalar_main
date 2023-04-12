import React from "react";

function Heading1(props) {
  var style = {
    fontFamily: "Days One, sans-serif",
  };
  return (
    <h1
      style={({ ...props.style, whiteSpace: "pre-line" }, { ...style })}
      className={props.className}
    >
      {props.content}
    </h1>
  );
}

export default Heading1;
