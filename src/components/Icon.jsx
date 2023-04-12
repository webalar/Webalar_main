import React from 'react';

function Icon(props){
  return(
    <a href={props.href} style={props.style}><i className={props.className}></i></a>
  );
}

export default Icon;
