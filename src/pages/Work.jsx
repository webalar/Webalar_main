import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";
import Project_Card from "../components/Project_Card";
import data from "../project_data.js";
import { Helmet } from "react-helmet";

function Work() {
  const [btn_text, setText] = useState("Show More");
  function handleClick() {
    if (btn_text === "Show More") {
      setText("Show Less");
    } else {
      setText("Show More");
    }
  }

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
    <div className="work initial_margin_a">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Our Work | Web Design, Development, and Marketing Portfolio | Webalar</title>
        <meta
          name="description"
          content="See examples of our past work, including 
                  custom web design, development, and 
                  marketing campaigns. Get inspired and 
                  discover what's possible with Webalar."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/work" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Work | Web Design, Development, and Marketing Portfolio | Webalar"
        />
        <meta
          property="og:description"
          content="See examples of our past work, including 
                  custom web design, development, and 
                  marketing campaigns. Get inspired and 
                  discover what's possible with Webalar."
        />
        <meta
          property="og:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webalar.in" />
        <meta property="twitter:url" content="https://webalar.in/work" />
        <meta
          name="twitter:title"
          content="Our Work | Web Design, Development, and Marketing Portfolio | Webalar"
        />
        <meta
          name="twitter:description"
          content="See examples of our past work, including 
                  custom web design, development, and 
                  marketing campaigns. Get inspired and 
                  discover what's possible with Webalar."
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
        <div className="row p-4 pb-2 pt-0">
          <div className="col-12">
            <h2 className="text-decoration-none heading02 daysOne">Featured <span style={{backgroundColor:"#FCBD00"}}>Projects</span></h2>
          </div>
        </div>
      </div>

      <div className="work mb-5">
        <div className="container">
          <div className="row p-4">
            {data.map((obj, index) => {
              console.log(index);
              if (index < 4) {
                return (
                  <Project_Card
                    title={obj.title}
                    content={obj.content}
                    img={obj.img}
                    url={`project/${index}`}
                    className="col-md-6 mb-3"
                  />
                );
              } else {
                return (
                  <Project_Card
                    title={obj.title}
                    content={obj.content}
                    img={obj.img}
                    url={`project/${index}`}
                    className="col-md-6 collapse mb-3"
                    id="collapseExample"
                  />
                );
              }
            })}
          </div>
          <p className="text-center">
            <button
              className="btn text-light hover_btn btn1 ps-5 pe-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={handleClick}
              style={{ backgroundColor: "#181818" }}
            >
              {btn_text}
            </button>
          </p>
        </div>
      </div>

      <GetInTouch />
      <Contact />
    </div>
  );
}

export default Work;
