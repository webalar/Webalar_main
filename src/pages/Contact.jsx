import React from "react";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contact";

import Heading2 from "../components/Heading2";
import Body2 from "../components/Body2";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Pinkbtn from "../components/Pinkbtn";
import { Helmet } from "react-helmet";
import Icon from "../components/Icon";


import location from "../images/contact/location-dot-solid.svg";
import phone from "../images/contact/phone-solid.svg";
import email from "../images/contact/envelope-solid.svg";



function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    user_email: "",
    user_service: "1",
    user_msg: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0va1fb",
        "template_gtm0ygb",
        form.current,
        "0A3Cg4YQ68Z6GjwYG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToSend({
            from_name: "",
            user_email: "",
            user_service: "1",
            user_msg: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="contact initial_margin_a">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Contact Webalar | Get in Touch for Custom Digital Solutions</title>
        <meta
          name="description"
          content="Ready to take your business to the next level 
                  with custom web design, development, and 
                  marketing services? Contact Webalar today 
                  to discuss your needs and get started."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Webalar | Get in Touch for Custom Digital Solutions"
        />
        <meta
          property="og:description"
          content="Ready to take your business to the next level 
                  with custom web design, development, and 
                  marketing services? Contact Webalar today 
                  to discuss your needs and get started."
        />
        <meta
          property="og:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webalar.in" />
        <meta property="twitter:url" content="https://webalar.in/contact" />
        <meta
          name="twitter:title"
          content="Contact Webalar | Get in Touch for Custom Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Ready to take your business to the next level 
                  with custom web design, development, and 
                  marketing services? Contact Webalar today 
                  to discuss your needs and get started."
        />
        <meta
          name="twitter:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />
      </Helmet>
      <Navbar />
      <i
        onClick={topFunction}
        id="myBtn"
        title="Scroll to Top"
        className="fa-solid fa-arrow-up shadow"
      ></i>

      <div className="container">
        <div className="row p-4 pt-0">
          <div className="col-md-6">
            <Heading2
              content="Contact Webalar"
              className="heading02 text-decoration-none daysOne"
            />
          </div>
          <div className="col-md-6">
            <Body2
              content="Choose your appropriate mode of contact and your request will be redirected to the right person."
              className="body02"
            />
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row p-4 mb-3">
            <h5 style={{ fontSize: "32px" }}>Talk to us</h5>

            {/* column 1 */}
            <div className="col-md-6 mb-5 col-sm-12 ">
              <form
                className="form  pt-5 pb-3"
                autocomplete="off"
                ref={form}
                onSubmit={sendEmail}
              >
                <label for="exampleFormControlInput1" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control unique_input_text_2"
                  id="exampleFormControlInput1"
                  required
                  name="from_name"
                  onChange={handleChange}
                  value={toSend.from_name}
                />
                <select
                  className="form-select unique_input_text_2 mt-4 required"
                  aria-label="Default select example"
                  required
                  name="user_service"
                  onChange={handleChange}
                  value={toSend.user_service}
                >
                  <option selected>Choose Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>

                <label for="exampleFormControlInput1" className="form-label mt-4">
                  Email address*
                </label>
                <input
                  type="email"
                  className="form-control unique_input_text_2 "
                  id="exampleFormControlInput1"
                  required
                  name="user_email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  value={toSend.user_email}
                />


                <label for="exampleFormControlInput1" className="form-label mt-4">
                  Your Message
                </label>
                <textarea
                  className="form-control unique_input_text_2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="user_msg"
                  onChange={handleChange}
                  value={toSend.user_msg}
                ></textarea>
                <Pinkbtn
                  content="Send Message"
                  type="submit"
                  className="text-light btn1 mt-5 rounded"
                  style={{ height: "40px" }}
                />
              </form>
              {/* <div className="mt-5 mb-3" style={{ display: "flex" }}>
                <img
                  src={require("../images/pink_phone.png")}
                  className="me-3"
                  width="29"
                  height="29"
                />
                <span style={{ display: "flex", fontWeight: "bold" }}>
                <a href="tel:+918600718068" className="text-dark" style={{textDecoration:"none"}}> +91 86007 18068 </a> / +91 80500 72071 / +91 70287 93547
                </span>
              </div>

              <div style={{ display: "flex" }}>
                <img
                  src={require("../images/pink_email.png")}
                  className="me-3"
                  width="29"
                  height="29"
                />
                <span style={{ display: "flex", fontWeight: "bold" }}>
                  hazraankush@webalar.in
                </span>
              </div> */}
            </div>

            {/* column 2 */}
            <div className="col-md-6 ps-4 pe-4 col-sm-12 contactCardWrapper">
              <div className="contactCard">
                <h4><img src={location} alt="" />Registered Office</h4>
                <p>BG 124, Ground Floor, Salt Lake, Sector II, Kolkata 91</p>
              </div>
              <div className="contactCard">
                <h4><img src={phone} alt="" />Phone</h4>
                <p>
                  <a href="+91 86007 18068">+91 86007 18068</a> &nbsp; | &nbsp;
                  <a href="+91 70287 93547">+91 70287 93547</a> &nbsp; | &nbsp;
                  <a href="+91 80500 72071">+91 80500 72071</a>
                </p>
              </div>
              <div className="contactCard">
                <h4><img src={email} alt="" />Email </h4>
                <p><a href="mailto:enquiry@webalar.in">enquiry@webalar.in</a></p>
              </div>
              <div className="contactCard">
                <h4>Follow Us on Social Media </h4>
                <p className="cardIcon">
                  <Icon style={{color:"black",marginRight:"1.5em"}} href="https://www.linkedin.com/company/webalar/" className="fa-brands fa-linkedin"/>
                  <Icon style={{color:"black",marginRight:"1.5em"}} href="https://instagram.com/webalar" className="fa-brands fa-instagram"/>
                  <Icon style={{color:"black",marginRight:"1.5em"}} href="https://twitter.com/webalar_" className="fa-brands fa-twitter"/>
                  <Icon style={{color:"black",marginRight:"1.5em"}} href="https://www.youtube.com/channel/UCrub7ajhglRho32GBjLz41w" className="fa-brands fa-youtube"/>
                  <Icon style={{color:"black",marginRight:"1.5em"}} href="https://www.facebook.com/webalar.inc" className="fa-brands fa-facebook-f"/>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Contacts />
    </div>
  );
}

export default Contact;
