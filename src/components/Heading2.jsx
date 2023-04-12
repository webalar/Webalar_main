import React from 'react';

function Heading2(props){
  var style={
   fontFamily: "Quicksand, sans-serif"
 }
  return(
  <h2 style={props.style,{...style}} className={props.className}>{props.content}</h2>
  );
}

export default Heading2;
