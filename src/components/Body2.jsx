import React from 'react';

function Body2(props){
  return(
  <p style={props.style} className={props.className}>{props.content}</p>
  );
}

export default Body2;
