import React from 'react';
import Navbar from '../components/Navbar'

import Body2 from "../components/Body2"
import Pinkbtn from "../components/Pinkbtn"

function error(){
  var style={};
  var style2={};

  if(document.documentElement.clientWidth>768){
    style={
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1em",
      fontWeight: "400"
    }
    style2={
      width:"11em",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.375em",
      fontWeight: "400",
      height: "50px",
    }
  }else{
    style={
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.875em",
      fontWeight: "400",
    }
    style2={
      width:"11em",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.375em",
      fontWeight: "400",
      height: "36px",
    }
  }

  return(
    <div className="error">
    <Navbar />
      <div className="container">
        <div className="row p-4">
          <div className="col-12 text-center" style={{height:"100%"}}>
              <img src={require('../images/error.png')} style={{height:"50%", width:"50%", marginTop:"100px"}} alt="error" />
              <h5 >Sorry, there’s nothing here</h5>
              <Body2 content="This page doesn’t exist or was removed!
              We suggest you to go back home" style={style}/>
              <a href="/" >
              <Pinkbtn className="text-light rounded" content="Back to homepage"
              style={style2} />
              </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default error;
