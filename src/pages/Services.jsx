import React from "react";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";
import Lottie from "lottie-react";
import Services_Card from "../components/Services_Card";
import a1 from "../images/a6.json";
import data from "../data.js";
import { Helmet } from "react-helmet";

function Services() {
  
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
    <div class="services initial_margin_a">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          Our Digital Solutions | Web Design, Development, and Marketing Services | Webalar
        </title>
        <meta
          name="description"
          content="Explore our range of digital services, from 
                  custom web design and development to 
                  online marketing and SEO. Discover how 
                  Webalar can help you achieve your online 
                  goals."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Digital Solutions | Web Design, Development, and Marketing Services | Webalar"
        />
        <meta
          property="og:description"
          content="Explore our range of digital services, from 
                  custom web design and development to 
                  online marketing and SEO. Discover how 
                  Webalar can help you achieve your online 
                  goals."
        />
        <meta
          property="og:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webalar.in" />
        <meta property="twitter:url" content="https://webalar.in/services" />
        <meta
          name="twitter:title"
          content="Our Digital Solutions | Web Design, Development, and Marketing Services | Webalar"
        />
        <meta
          name="twitter:description"
          content="Explore our range of digital services, from 
                  custom web design and development to 
                  online marketing and SEO. Discover how 
                  Webalar can help you achieve your online 
                  goals."
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
        class="fa-solid fa-arrow-up shadow"
      ></i>

      <div class="services">
        <h1 class="mt-2 text-decoration-none heading01 text-center daysOne">Our <span style = {{backgroundColor:"#FCBD00"}}>Plethora</span> of Services</h1>
        <div class="container">
          <div class="row ps-4 pe-4">
            <div class="col-12">
              <Lottie animationData={a1} style={{ height: "30em" }} />
            </div>
          </div>
        </div>
      </div>

      <div class="services mb-3">
        {data.map((obj, index) => {
          return (
            // eslint-disable-next-line react/jsx-pascal-case
            <Services_Card
              key={index}
              index={index}
              content={obj.content}
              title={obj.title}
              img={obj.icons}
              span={obj.span}
              big_img={obj.big_img}
              url={`service/${obj.title.replaceAll(' ','').replaceAll('/','')}`}
            />
          );
        })}
      </div>

      <GetInTouch />
      <Contact />
    </div>
  );
}

export default Services;
