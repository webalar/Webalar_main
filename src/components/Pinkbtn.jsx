import React from 'react';

function Pinkbtn(props){
  var style={
    backgroundColor:"#EE3364",
    border:"0",
    borderRadius:"56px",
    width:"10em"
  }

  return(
    <button type={props.type} id={props.id} value={props.value} className={props.className} style={{...style,...props.style}}>{props.content}</button>
  );
}

export default Pinkbtn;
