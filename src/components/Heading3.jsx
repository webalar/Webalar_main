import React from 'react';

function Heading3(props){
   var style={
    fontFamily: "Poppins, sans-serif"
  }
  return(
  <h1 style={props.style , {...style}} className={props.className}>{props.content}</h1>
  );
}

export default Heading3;
