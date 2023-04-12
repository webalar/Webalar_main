import React from 'react';
import Nav_logo from "../images/nav_logo.png"
import Hamburger from "../images/hamburger.png"

import data from "../data.js"
import Projectdata from "../project_data.js"

function Navbar(){

  var location = window.location.pathname;

  document.addEventListener('scroll',(e)=>{
    if(window.scrollY===0){
      document.querySelector("nav").classList.remove("shadow");
    }else{
      document.querySelector("nav").classList.add("shadow");
    }
  })

  function MobileShowSub(e){
    e.target.parentElement.querySelector('.subMenu').classList.toggle("showSubMenu");
  }
  
  function showSub(e){
    try{e.target.querySelector('.subMenu').classList.add("showSubMenu");
  } catch(err) {
    if (err instanceof TypeError) {
    }else{
      console.warn(err)
    }
  }
    
  }

  function dontShowSub(e){
    let list = document.querySelectorAll('.subMenu');
    for(let i = 0;i<list.length;i++) {
      list[i].classList.remove("showSubMenu")
    }
  }


  return(
    <div className="container" >
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"white"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className="nav_logo" src={Nav_logo} alt="Logo" /></a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""><img src={Hamburger} alt="Hamburger"  /></span>
        </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link rounded ps-2 body01 me-2" aria-current="page" href="/"
        style={location==="/"? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}>Home</a>

        <a className="nav-link ps-2 body01 rounded me-2 " href="/about"
        style={location==="/about" ? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}>About</a>

        <div className="nav-link ps-2 body01 rounded me-2"  onMouseOver={showSub} onMouseLeave={dontShowSub} 
        style={location.startsWith("/service") ? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}> <span onClick={()=>window.location = '/services'} >Services</span> 
          <img src={require("../images/down.png")} alt="down" className="hasSubMenu" onClick={MobileShowSub} />
          <ul className="subMenu">
          {data.map((service, i) => {
            return(
              <li key={i}> <a href={`/service/${service.title.replaceAll(' ','').replaceAll('/','')}`}> {service.title}</a></li>
              )
            })}
          </ul>
        </div>

        <div className="nav-link ps-2 body01 rounded me-2" onMouseOver={showSub} onMouseLeave={dontShowSub}
        style={location==="/work" || location.startsWith("/project") ? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}><span onClick={()=>window.location='/work'} >Work</span> 
          <img src={require("../images/down.png")} alt="down" className="hasSubMenu" onClick={MobileShowSub} />
          <ul className="subMenu workSubMenu">
          {Projectdata.map((service, i) => {
            return(
              <li key={i}> <a href={`/project/${i}`}> {service.title}</a></li>
            )
          })}
          </ul>
        </div>

        <a className="nav-link ps-2 body01 rounded me-2" href="/"
        style={location==="/stories" ? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}>Stories</a>

        <a className="nav-link ps-2 body01 rounded me-2" href="/contact"
        style={location==="/contact" ? {backgroundColor:"#FCBD00", color:"black"}:{fontWeight:"700"}}>Contact</a>

        <div className="hide">
        <div style={{display:"flex", flexDirection:"column"}} className="mb-2 mt-5 ">
          <span style={{display:"flex"}} className="hide" >
          <img src={require('../images/location.png')} alt="Webalar Company Address" height="30" width="30" className="me-2 pt-1"/>
          Kolkata | Pune | Bangalore
          <br />
          Serving Globally
          </span>
        </div>
        </div>

        <div className="hide">
        <div style={{display:"flex", flexDirection:"column"}} className="mb-2">
          <span style={{display:"flex"}} className="" >
          <img src={require('../images/phone.png')} alt="Webalar Company Contact Number" height="30" width="30" className="me-2 pt-1"/>
          +91 80500 72071
          <br />
          +91 70287 93547
          </span>
        </div>
        </div>

        <div className="hide">
        <div style={{display:"flex", flexDirection:"column"}} className="mb-2">
          <span style={{display:"flex"}} className="" >
          <img src={require('../images/email.png')} alt="Webalar Company Email" height="30" width="30" className="me-2 pt-1"/>
          enquiry@webalar.in
          </span>
        </div>
        </div>

      </div>
    </div>
  </div>
</nav>
</div>
  );
}
export default Navbar;
