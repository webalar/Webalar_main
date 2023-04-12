import React from "react";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";

import Body2 from "../components/Body2";
import Pinkbtn from "../components/Pinkbtn";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";

import contactUs from "../images/NewContactUs.svg";
import NewHero from "../images/NewHero.svg";
// import NewHero from "../images/NewHero.svg";
import GoogleReviewsMain from "../images/testimonials/GoogleReviewsMain.svg";
import pandas from "../images/testimonials/panda.svg";
import timeToTravller from "../images/testimonials/timeToTraveler.svg";
import fiveStar from "../images/testimonials/fiveStar.svg";
import google from "../images/testimonials/google.svg";


import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

function Home() {
  const [toSend, setToSend] = useState({
    from_name: "",
    user_email: "",
    user_phone: "",
    user_location: "",
    user_service: "1",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_garw516",
        "Modal_Form",
        form.current,
        "QiS4rsjZ-FYcuCYJM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToSend({
            from_name: "",
            user_email: "",
            user_phone: "",
            user_location: "",
            user_service: "1",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
    <div className="Home">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          Webalar - Digital Agency | Web Design, Development & Marketing Services
        </title>
        <meta
          name="description"
          content="Webalar is a full-service digital agency 
          specializing in web design, development, 
          and marketing services. We help businesses 
          of all sizes build effective and engaging 
          online presences."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Webalar - Digital Agency | Web Design, Development & Marketing Services"
        />
        <meta
          property="og:description"
          content="Webalar is a full-service digital agency 
          specializing in web design, development, 
          and marketing services. We help businesses 
          of all sizes build effective and engaging 
          online presences."
        />
        <meta
          property="og:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webalar.in" />
        <meta property="twitter:url" content="https://webalar.in/" />
        <meta
          name="twitter:title"
          content="Webalar - Digital Agency | Web Design, Development & Marketing Services"
        />
        <meta
          name="twitter:description"
          content="Webalar is a full-service digital agency 
          specializing in web design, development, 
          and marketing services. We help businesses 
          of all sizes build effective and engaging 
          online presences."
        />
        <meta
          name="twitter:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />
      </Helmet>
      <Navbar />
png
      <div className="container">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog  modal-dialog-centered modal-dialog-scrollable"
            style={{ maxWidth: "80%", margin: "auto" }}
          >
            <div className="modal-content">
              <div className="modal-body p-0" style={{ overflowX: "hidden" }}>
                <div className="row">
                  <div className="col-md-6 bg-yellow hide2">
                    <div className="modal-header border-0 me-3 hide1_modal_close">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div
                      id="carouselExampleCaptions"
                      className="carousel carousel-dark slide"
                      data-bs-ride="false"
                    >
                      <div
                        className="carousel-indicators"
                        style={{ marginBottom: "10px" }}
                      >
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                          <img
                            src={require("../images/modal_img.png")}
                            className="modal_img"
                            width="200"
                            alt="Webalar Web Design and Development Services"
                          />
                          <div className="carousel-caption">
                            <h5
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              We build websites<br/> that help your business
                            </h5>
                            <p style={{ fontSize: "12px", opacity: "0.7" }}></p>
                          </div>
                        </div>
                        <div className="carousel-item text-center">
                          <img
                            src={require("../images/modal_img.png")}
                            className="modal_img"
                            width="200"
                            alt="Content Writing services"
                          />
                          <div className="carousel-caption">
                            <h5
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              We provide Content Writing services as well
                            </h5>
                            <p style={{ fontSize: "12px", opacity: "0.7" }}></p>
                          </div>
                        </div>
                        <div className="carousel-item text-center">
                          <img
                            src={require("../images/modal_img.png")}
                            className="modal_img"
                            width="200"
                            alt="Graphics Designer"
                          />
                          <div className="carousel-caption">
                            <h5
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              Good graphics will help you to create a unique
                              branding
                            </h5>
                            <p style={{ fontSize: "12px", opacity: "0.7" }}></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 m-auto">
                    <div
                      className="modal-header border-0 me-3 "
                      style={{ display: "inline", float: "right" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="text-center ps-5 pe-5">
                      <img
                        src={require("../images/logo.png")}
                        className="bg-yellow rounded-circle p-3 mt-4 mb-2"
                        alt="Webalar Logo"
                        height="84"
                        width="84"
                      />
                      <Heading3
                        content="Want to discuss your"
                        className="heading03"
                      />
                      <Heading3
                        content=" new requirement?"
                        className="heading03"
                      />
                    </div>

                    <form
                      className="form ps-5 pe-5 pt-3 pb-3"
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

                      <label
                        for="exampleFormControlInput1"
                        className="form-label mt-3"
                      >
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="form-control unique_input_text_2"
                        id="exampleFormControlInput1"
                        required
                        name="user_email"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        value={toSend.user_email}
                      />

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Phone*
                          </label>
                          <input
                            type="text"
                            className="form-control unique_input_text_2"
                            id="exampleFormControlInput1"
                            required
                            name="user_phone"
                            placeholder="xxxxx-xxxxx"
                            onChange={handleChange}
                            value={toSend.user_phone}
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Location*
                          </label>
                          <input
                            type="text"
                            className="form-control unique_input_text_2"
                            id="exampleFormControlInput1"
                            required
                            name="user_location"
                            placeholder="E.g. Pune, Mumbai"
                            onChange={handleChange}
                            value={toSend.user_location}
                          />
                        </div>
                      </div>

                      <select
                        className="form-select unique_input_text_2 mt-3 required"
                        required
                        aria-label="Default select example"
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

                      <Pinkbtn
                        content="Send Message"
                        type="submit"
                        className="w-100 text-light btn1 mt-4 mb-3 rounded "
                        style={{ height: "40px",fontSize:"1rem" }}
                        id="send_btn"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <i
            onClick={topFunction}
            id="myBtn"
            title="Scroll to Top"
            className="fa-solid fa-arrow-up shadow"
          ></i>
        </div>
        <div className="row md:p-2 initial_margin_i">
          <div className="col-md-6 intro">
            <h1
              className="mt-5 text-decoration-none heading01 daysOne heroText"
            >
              Quality Web
              <br/> Solutions
              <span className=""> focused</span>
              <span className="heroFontsizeDecreaser">
                {" "}on{" "}
                <span
                style={{ backgroundColor: "#FCBD00", whiteSpace: "nowrap" }}
                >
                  User Experience
                </span>
              </span>
            </h1>
            <Body2
              content="With our cutting-edge technology and experienced team, we deliver customized web solutions that drive results and elevate your brand's online presence."
              className="mt-5 body02"
              style={{ marginRight: "20%" }}
            />
            <a href="/services">
              <Pinkbtn
                className="btn text-light me-3 mt-3 hover_btn btn1"
                content="Explore"
                style={{ minWidth: "203px" }}
              />
            </a>
          </div>
          <div className="col-md-6 text-center Lanimation">
            <img
              src={NewHero}
              alt="NewHero"
              style={{ marginLeft: "30px",marginBottom:"50px" }}
              width="95%"
            />
          </div>
        </div>
      </div>

      {/* our clients */}
      <div className="Home Ourclients pt-5">
        <div className="clientTitle">
          <h2 className="daysOne">
            Our Trusted
            <br /> Clients
          </h2>
        </div>
        <div className="clientCarousel">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
            touch="true"
          >
            {/* <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div> */}
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src={require("../images/sponsors/sponsor1.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor2.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor3.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor4.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor5.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor6.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor7.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor8.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor9.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor10.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor11.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor12.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor13.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor14.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor15.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor16.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor17.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor18.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor19.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor20.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor21.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor22.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor23.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor24.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor25.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor26.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor27.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor28.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={require("../images/sponsors/sponsor29.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor30.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
                <img
                  src={require("../images/sponsors/sponsor31.webp")}
                  height="100"
                  width="100"
                  className="company-logo"
                  alt="Webalar Web Development Company Clients"
                />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/*  our clients end */}

      {/* <div
        className="Home"
        style={{
          backgroundColor: "black",
          marginTop: 0,
          paddingTop: "50px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <div className="row p-4 pt-5 pb-0  mb-5">
            <div className="col-md-6" id="SWO">
              <Heading2
                content="Our Services"
                className="mt-4 heading02 white daysOne"
              />
              <Body2
                content="Discover the full range of services we offer to enhance your online presence."
                className="mt-4 body02 white poppins servicesBody"
                style={{ marginRight: "20%", fontWeight: "300" }}
              />
            </div>
            <div
              className="col-md-6"
              style={{
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <a href="/services">
                <Pinkbtn
                  className="btn text-light me-3 mt-3 hover_btn btn1 poppins servicebtn"
                  content="View All Services"
                  style={{ minWidth: "203px" }}
                />
              </a>
            </div>
          </div>
          <Yellow_Card />
        </div>
      </div> */}

      {/* SERvices */}
      <div id="services" className="section services bg-1">
        <div className="container">
          <div className="row eqHeight">
            <div className="col-sm-9 col-md-10">
              <h2 className="heading02 center daysOne mb-5">Our Plethora of Services</h2>
              <div className="row list-services">
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                    <div className="body-content">
                      <h4 className="title"><a href="/service/WebsiteDevelopment" style={{color:"black",textDecoration:"none"}}>Web Development</a></h4>
                      <div className="text">
                        We specialize in custom coding for those who require a unique 
                        and tailored website, as well as platforms like WordPress and 
                        Wix that allow for easier website management and updates.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-mobile"></i>
                    </div>
                    <div className="body-content">
                      <h4 className="title"><a href="/service/UIUXDesign" style={{color:"black",textDecoration:"none"}}>UI / UX Design</a></h4>
                      <div className="text">
                        Our services include everything from design and wireframing to user testing 
                        and optimization. We work with a variety of platforms and technologies to 
                        ensure that your website is accessible, responsive, and scalable across 
                        all devices.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-pencil"></i>
                    </div>  
                    <div className="body-content">
                      <h4 className="title"><a href="/services" style={{color:"black",textDecoration:"none"}}>Content Services</a></h4>
                      <div className="text">
                        We offer a comprehensive suite of content writing services, starting from 
                        devising an effective content strategy and generating ideas, to conducting 
                        thorough research, crafting high-quality written content, and refining it 
                        through expert editing.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-camera"></i>
                    </div>
                    <div className="body-content">
                      <h4 className="title"><a href="/service/GraphicsDesign" style={{color:"black",textDecoration:"none"}}>Graphics Design</a></h4>
                      <div className="text">
                        Our services include logo design, branding, social media graphics, infographics, 
                        and more. By partnering with us, you can be confident that your business will 
                        be easily identifiable and distinctive across all digital platforms, setting you 
                        apart from competitors and enhancing the effectiveness of your marketing 
                        initiatives.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-hand-pointer"></i>
                    </div>
                    <div className="body-content">
                      <h4 className="title"><a href="/services" style={{color:"black",textDecoration:"none"}}>Digital Marketing</a></h4>
                      <div className="text">
                        Our digital marketing services include everything from search engine optimization (SEO) 
                        and pay-per-click (PPC) advertising to social media marketing, email marketing, 
                        and content marketing. We take a data-driven approach to digital marketing, 
                        using analytics and user feedback to continuously refine and optimize your 
                        campaigns for maximum impact.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 x col-md-6">
                  <div className="box-icon-1">
                    <div className="icon">
                      <i className="fa fa-amazon"></i>
                    </div>
                    <div className="body-content">
                      <h4 className="title"><a href="/services" style={{color:"black",textDecoration:"none"}}>Marketplace Management</a></h4>
                      <div className="text">
                        At our digital agency, we offer comprehensive marketplace management services, 
                        including inventory management, product listings, and advertising optimization, to help 
                        businesses maximize their marketplace potential.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 x col-md-2">
              <div className="full-height-spacer">
                <div className="side-link right dark">
                  <a href="/work">
                    <i className="fa fa-long-arrow-left"></i> View Projects
                  </a>
                </div>
                <div className="section-heading text-right daysOne">
                  OUR <span className="white">SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services ended */}

      <div className="Projects" style={{ backgroundColor: "#E6E3D9" }}>
        <div className="container  pt-2 pb-2">
          <div className="row pt-5 ps-4 pb-5 pe-4">
            <div className="col-md-4 ">
              <Heading2 content="Flagship" className="heading02 daysOne" />
              <Heading2 content="Projects" className="heading02 daysOne" />
              <div
                className="card  mt-5  border-5 border-0 border-dark border-top "
                style={{ backgroundColor: "#E6E3D9", borderRadius: "0px" }}
              >
                <div className="card-body">
                  <Heading3
                    className="card-title heading03 mt-3 mb-3"
                    content="Reading Pandas"
                  />
                  <a href="https://www.readingpandas.com/">
                    <img
                      src={require("../images/arrow.png")}
                      className="project_card_link"
                      alt="Arrow Sign"
                    />
                  </a>
                  <h6 className="card-subtitle  text-muted mb-3">
                    Web Development
                  </h6>
                </div>
                <img
                  src={require("../images/projects/all_projects/reading-pandas_mockup.webp")}
                  height="200"
                  className="card-img-top rounded-bottom flagshipImg"
                  alt="Web Development"
                />
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="card project_card border-5 border-0 border-dark border-top "
                style={{ backgroundColor: "#E6E3D9", borderRadius: "0px" }}
              >
                <div className="card-body">
                  <Heading3
                    className="card-title heading03  mt-3 mb-3 w-75"
                    content="CNFLNC Media"
                  />
                  <a href="https://cnflncmedia.netlify.app/">
                    <img
                      src={require("../images/arrow.png")}
                      className="project_card_link"
                      alt="Arrow Sign"
                    />
                  </a>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Website Development
                  </h6>
                </div>
                <img
                  src={require("../images/projects/all_projects/cnflnc_mockup.webp")}
                  height="200"
                  className="card-img-top rounded-bottom flagshipImg"
                  alt="Website Developmen Service"
                />
              </div>
            </div>

            <div className="col-md-4 ">
              <div
                className="card  border-5 border-0 border-dark border-top"
                style={{ backgroundColor: "#E6E3D9", borderRadius: "0px" }}
              >
                <div className="card-body">
                  <Heading3
                    className="card-title heading03  mt-3 mb-3 w-75"
                    content="GHRTV World News"
                  />
                  <a href="https://www.ghrtv.org/">
                    <img
                      src={require("../images/arrow.png")}
                      className="project_card_link"
                      alt="Arrow Sign"
                    />
                  </a>
                  <h6 className="card-subtitle mb-3 text-muted">Web Development</h6>
                </div>
                <img
                  src={require("../images/projects/all_projects/ghrtv_mockup.webp")}
                  height="200"
                  className="card-img-top rounded-bottom flagshipImg"
                  alt="Web Developmen Service"
                />
              </div>
              {/* <a href="/work">
                <img
                  src={View_More}
                  className="view_more"
                  alt="Webalar Projects"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* latest projects end */}

      {/* testimonials */}
      <div className="container">
        <div className="testimonial mt-5">
          <span className="tstHeader">
            <div className="tstTitle daysOne p-5">Testimonials</div>
            <div className="tstLogo p-5">
              <img src={GoogleReviewsMain} alt="google reviews" />
            </div>
          </span>

          <span className="tstMain row">
            {/* left */}
            <div className="col-md-6 tstCol">
              {/* CARD */}
              <div className="tstCard m-2 p-4">
                <div className="tstCardHeader mt-4">
                  <img src={pandas} alt="client" />
                  <span className="tstName">
                    <h3>Mamata Siroya</h3>
                    <p>Reading Pandas</p>
                    <img src={fiveStar} alt="rating" />
                  </span>
                  <img src={google} alt="google" className="tstGoogle" />
                </div>
                <div className="tstCardMain p-3">
                  <p>
                    Work well done and in time. Followed up regularly to make
                    sure things are on track. Good value for money - suggest you
                    give them a chane!
                  </p>
                </div>
              </div>
              <div className="tstCard m-2 p-4 text-center tstGoogleReview">
                <a href="https://www.google.com/search?q=webalar&oq=webalar&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i60l2j69i61l2.1213j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3a0275efe279aacd:0x84cab75744ecac95,1" target="blank" className="text-decoration-none">
                  View more reviews on
                </a>
                <br />
                <br />
                <a href="https://www.google.com/search?q=webalar&oq=webalar&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i60l2j69i61l2.1213j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3a0275efe279aacd:0x84cab75744ecac95,1" target="blank" className="text-decoration-none">
                <img src={GoogleReviewsMain} alt="Google reviews" />
                </a>
              </div>
            </div>
            <div className="tstLeft col-md-6">
              {/* CARD */}
              <div className="tstCard m-2 p-4">
                <div className="tstCardHeader mt-4">
                  <img src={timeToTravller} alt="client" />
                  <span className="tstName">
                    <h3>Jesal Desai</h3>
                    <p>Tourist To Travellers</p>
                    <img src={fiveStar} alt="rating" />
                  </span>
                  <img src={google} alt="google" className="tstGoogle" />
                </div>
                <div className="tstCardMain p-3">
                  <p>
                    Webalar reached out to us and since we hadn't heard of them
                    earlier we had some concerns. Moitree from their team out
                    and beyond to give us all supporting documents and past work
                    for us to review.
                    <br />
                    <br />
                    In no time we onboarded them and I have to say that I
                    haven't seen a more professional team. Right from the
                    developer Prathamesh to Moitree, the whole team gets your
                    work done Asap.
                    <br />
                    <br /> They are extremely professional at their work.
                    Recommend them 100%
                  </p>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className="Home pt-3 pb-3">
        <div className="container mb-5 mt-5">
          <div className="row ps-4 pe-4">
            <div className="col-md-6 pt-5">
              <Heading2
                content="One stop solution"
                className="heading02 pt-3  black font-six daysOne"
              />
              <Heading2
                content="for your Brand to go online"
                className="heading02  black font-six daysOne"
              />

              <Body2
                content="With our expertise and industry knowledge, we can help you navigate the digital 
                landscape and develop a comprehensive online strategy that maximizes your 
                brand's reach and impact. Let us help you unlock your brand's full potential and 
                drive sustainable growth."
                className="mt-4 body02 black"
              />
              
              <a href="/contact">
                <Pinkbtn
                  className="btn text-light me-3 mt-3 hover_btn btn1"
                  content="Contact us"
                  style={{ minWidth: "203px" }}
                />
              </a>
            </div>
            <div className="col-md-6 bgDots">
              {/* <Lottie animationData={a3} style={{ height: "30em" }} /> */}
              <img
                src={contactUs}
                alt="Contact Us"
                style={{ height: "30em", zIndex: "2" }}
              />
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
      <Contact />
    </div>
  );
}

export default Home;
