import React from 'react';
import Icon from "./Icon";
import Body2 from "./Body2";

function Contact(props){
  return(
    <div className="Contact pt-5 pb-3" style={{backgroundColor:"#181818"}}>
      <div className="container">
        <div className="text-center mb-5">
          <img src={require('../images/logo.png')} alt="Webalar Website Design and Development Agency" style={{height:"6em",width:"6em"}}/>
        </div>

        <div className="row ps-4 pe-4">
          <div className="col-md-4 mb-2">

            <div style={{backgroundColor:"#E6E3D9", display:"flex", flexDirection:"column",padding:"20px"}} className="rounded h-100" >
              <span style={{display:"flex"}} className="body02" >

              <img src={require('../images/location.png')} alt="Webalar Company Address Location" height="40" className="me-2 rounded" style={{
                backgroundColor:"white",
                padding:"2%"
              }}/>
              Kolkata | Pune | Bangalore
              <br />
              Serving Globally
              </span>
            </div>
          </div>

          <div className="col-md-4 mb-2" >
          <div style={{backgroundColor:"#E6E3D9", display:"flex", flexDirection:"column",padding:"20px"}} className="rounded h-100">

            <span style={{display:"flex"}} className="body02">
            <a href="tel: +918050072071">
            <img src={require('../images/phone.png')} alt="Webalar Company Phone Number" height="40" className="me-2 rounded" style={{
              backgroundColor:"white",
              padding:"12%"
            }}/>
            </a>
            <span>
              <a href="tel:+918600718068" className="text-dark" style={{textDecoration:"none"}}>
               +91 86007 18068
               </a>
               <br/>
              <a href="tel: +918050072071" className="text-dark" style={{textDecoration:"none"}}>
              +91 80500 72071
              </a>
              <br />
              <a href="tel: +917028793547" className="text-dark" style={{textDecoration:"none"}}>
              +91 70287 93547
              </a>
            </span>

            </span>
          </div>
          </div>

          <div className="col-md-4 mb-2" >
          <div style={{backgroundColor:"#E6E3D9", display:"flex", flexDirection:"column" ,padding:"15px 20px"}} className="rounded h-100">

            <span style={{display:"flex",wordWrap:"break-word", overflowWrap:"anywhere",alignItems:"center"}} className="email body02">
            <a href="mailto:enquiry@webalar.in">
            <img src={require('../images/email.png')} height="40" alt="Webalar Company Email" className="me-2 rounded" style={{
              backgroundColor:"white",
              padding:"12%"
            }}/>
            </a>
            <span>
              <a href="mailto:enquiry@webalar.in" className="text-dark" style={{textDecoration:"none"}}>enquiry@webalar.in</a>
            </span>

            </span>
          </div>
          </div>
        </div>


        <hr style={{color:"white", width:"97%", margin:"auto"}} className="mt-3 mb-3 text-center"/>

        <div className="ps-4 pe-4 footerLast">
          <div className="icons">
            <Icon style={{color:"white",marginRight:"1.5em"}} href="https://www.linkedin.com/company/webalar/" className="fa-brands fa-linkedin"/>
            <Icon style={{color:"white",marginRight:"1.5em"}} href="https://instagram.com/webalar" className="fa-brands fa-instagram"/>
            <Icon style={{color:"white",marginRight:"1.5em"}} href="https://twitter.com/webalar_" className="fa-brands fa-twitter"/>
            <Icon style={{color:"white",marginRight:"1.5em"}} href="https://www.youtube.com/channel/UCrub7ajhglRho32GBjLz41w" className="fa-brands fa-youtube"/>
            <Icon style={{color:"white",marginRight:"1.5em"}} href="https://www.facebook.com/webalar.inc" className="fa-brands fa-facebook-f"/>
          </div>
          <div className="icons">
            <Body2 content={`© ${new Date().getFullYear()} Webalar Website
            Developers & Services (OPC) Pvt. Ltd`}
            style={{color:"white", display:"inline"}}
            className="body02 footerDev"
            />
          </div>
          <div className="icons">
            <a href="/privacy" className="footerDev">Privacy Policy</a>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Contact;
