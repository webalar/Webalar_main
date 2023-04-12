import React from "react";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";

import MIA from "../images/MIA.svg";
import googleWorkspace from "../images/googleWorkspace.svg";

import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Body2 from "../components/Body2";
import { Helmet } from "react-helmet";

function about() {
  
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
    <div className="about initial_margin_a">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>About Webalar - Digital Agency | Our Story & Mission</title>
        <meta
          name="description"
          content="Learn more about Webalar, a digital agency 
                    dedicated to helping businesses succeed online. 
                    Discover our story, our mission, and the team 
                    behind our success.
                    "
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Webalar - Digital Agency | Our Story & Mission"
        />
        <meta
          property="og:description"
          content="Learn more about Webalar, a digital agency 
                    dedicated to helping businesses succeed online. 
                    Discover our story, our mission, and the team 
                    behind our success.
                    "
        />
        <meta
          property="og:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webalar.in" />
        <meta property="twitter:url" content="https://webalar.in/about" />
        <meta
          name="twitter:title"
          content="About Webalar - Digital Agency | Our Story & Mission"
        />
        <meta
          name="twitter:description"
          content="Learn more about Webalar, a digital agency 
                    dedicated to helping businesses succeed online. 
                    Discover our story, our mission, and the team 
                    behind our success.
                    "
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

      <div className="container mt-5">
        <h1
          className="daysOne heading01 mt-5 mb-5 text-center"
          style={{ position: "relative" }}
        >
          Unique{" "}
          <span style={{ backgroundColor: "#FCBD00f1" }}>Web Solutions</span>{" "}
          for your Business
          <img
            className="elcipse"
            src={require("../images/eclipse.png")}
            alt="eclipse"
          />
        </h1>
      </div>

      <div className="about" style={{ position: "relative" }}>
        <img
          className="polygon2"
          src={require("../images/polygon2.png")}
          alt="eclipse"
        />
        <div className="container">
          <div className="row p-4 mt-5">
            <p className="body02 text-center mb-5">
              <span style={{ marginInline: "10px" }}>
                Webalar is a Web agency that ensures clients get the best
                websites. Websites are not only appealing but help them in lead
                generation. Webalar has worked with several clients. The only
                aim is to stand out by providing services and help clients in
                navigating their way around the vast digital space.
              </span>
              <br />
              <br />
              We make sure services are being provided before deadline and
              pledge complete transparency and cooperation.
              <br />
              <br />
              The competent and dedicated professional team delivered quality
              website development and designing with providing services such as
              hosting websites, excellent graphic designing, video editing, and
              quality content writing that will make your website rank. The
              company has tie-ups with other companies.
              <br />
              <br />
              Our company’s mission is “To provide services to clients that are
              not only high-quality but also at the most affordable prices. We
              focus on being upfront with the clients about the work, and
              promise complete transparency and efficiency”.
              <br />
              <br />
              Our vision is “Making complete use of the internet and helping
              businesses by designing their online paths at affordable prices.
              <br />
              <br />
              We Pledge quality services for every business’s online presence
              and providing a solution to all website related problems”.
              <br />
              <br />
              In this way, the company started.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row p-4">
          <div className="col-md-12">
            <Heading2
              content="Our Dynamic Team"
              className="heading02 daysOne mt-5"
            />

            <Body2
              content="To be the company our customers want us to be, it takes an eclectic group of"
              className="body02 m-0"
            />
            <Body2
              content="passionate operators. Get to know the people leading the way at Webalar."
              className="body02"
            />
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="row ps-4 pe-4">
            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/newAnkush.webp")}
                  className="card-img-top newHeight rounded shadow-sm"
                  alt="Ankush Hazra Webalar Founder & Director"
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <Heading3 content="Ankush Hazra" className="heading03" />
                  <Body2 content="Founder & Director" className="body02" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/newMoitree.webp")}
                  className="card-img-top newHeight rounded shadow-sm"
                  alt="Moitree Sarkar Webalar Operations cum Project Manager"
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <Heading3 content="Moitree Sarkar" className="heading03" />
                  <Body2
                    content="Operations Head"
                    className="body02"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/prathmesh.webp")}
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                  className="card-img-top newHeight rounded shadow-sm"
                  height="300"
                  alt="Prathamesh Bankar Webalar Sr. Developer"
                />
                <div className="card-body">
                  <Heading3 content="Prathamesh Bankar" className="heading03" />
                  <Body2
                    content="UI/UX Designer"
                    className="body02 text-muted"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row ps-4 pe-4">
            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/newAnimesh.webp")}
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                  className="card-img-top newHeight rounded shadow-sm"
                  height="300"
                  alt="Animesh Singh Webalar Developer"
                />
                <div className="card-body">
                  <Heading3 content="Animesh Singh" className="heading03" />
                  <Body2 content="Full Stack Developer" className="body02 text-muted" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/croppedToDeath.webp")}
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                  className="card-img-top newHeight rounded shadow-sm"
                  height="300"
                  alt="Developer"
                />
                <div className="card-body">
                  <Heading3 content="Arvinder Singh" className="heading03" />
                  <Body2
                    content="Front End Developer"
                    className="body02 text-muted"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0">
                <img
                  src={require("../images/team/Newsaral.webp")}
                  style={{
                    height: "300px",
                    width: " 100%",
                    objectFit: "cover",
                  }}
                  className="card-img-top newHeight rounded shadow-sm"
                  height="300"
                  alt="Ridhima Sharma Webalar Social Media Manager"
                />
                <div className="card-body">
                  <Heading3 content="Saral Vashishtha" className="heading03" />
                  <Body2
                    content="Content Writer"
                    className="body02 text-muted"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* referal and incorporated under */}
      <div className="container" id="collaboration">
        <div className="googleWorkspace">
          <p className="mb-1">Official Referrer</p>
          <img src={googleWorkspace} alt="Google workspace" />
          <p className="mt-4" style={{ fontWeight: 500 }}>
            Some benefits include:
          </p>
          <ul>
            <li>Business email for your domain</li>
            <li>Access from any location or device</li>
            <li>Enterprise-level management tools</li>
          </ul>
          <p className="googleText mt-5">
            Sign up using our link{" "}
            <a href="#s" style={{ color: "#EE3364" }}>
              {" "}
              https://referworkspace.app.goo.gl/244g
            </a>{" "}
            and get a 14-day trial, and mail us to get an exclusive discount
            when you try Google Workspace for your business.
          </p>
        </div>
        <div className="registeredunder">
          <p>Incorporated Under</p>
          <img src={MIA} alt="ministry of corporate affairs" />
          <p className="mt-3" style={{ fontWeight: "500",overflowWrap:"break-word" }}>
            CIN : U72900WB2021OPC243089
          </p>
          <p className="mb-0">Referrers</p>
          <div className="aboutOther mt-0">
            <img
              className="m-2 mt-0 ms-0"
              src={require("../images/hostinger.png")}
              alt="hostinger"
            />
            <img
              className="m-2 mt-0"
              src={require("../images/namecheap.png")}
              alt="namecheap"
            />
            <img
              className="m-2 mt-0"
              src={require("../images/myBusiness.png")}
              alt="google my business"
            />
          </div>
        </div>
      </div>
      

      <div className="about ">
        <div className="container mt-5 mb-5">
          <div className="row p-4">
            <div className="col-md-12">
              <Heading2 content="How We Are Different?" className="heading02 daysOne mb-4" />

              <Body2
                content="Webalar stands out from the hundreds of other companies
                providing similar"
                className="body02 m-0"
              />
              <Body2
                content="services due to a lot of reasons."
                className="body02 mb-5"
              />
            </div>
          </div>

          <div className="row ps-4 pe-4">
            <div className="col-md-6">
              <Heading3 content="Industry knowledge" className="heading03" />
            </div>
            <div className="col-md-6">
              <Body2
                content="We have the sector knowledge necessary to properly address the requirements of your business. We thoroughly research the most recent trends to assist you in building the website of your dreams."
                className="body02"
              />
            </div>
            <hr />
          </div>

          <div className="row ps-4 pe-4">
            <div className="col-md-6">
              <Heading3 content="Working ethics" className="heading03" />
            </div>
            <div className="col-md-6">
              <Body2
                content="Work ethics are the moral principles that guide an individual's behavior. We are not only reliable but also responsive and provide only the best results to you without compromising on the work ethics."
                className="body02"
              />
            </div>
            <hr />
          </div>

          <div className="row ps-4 pe-4 pb-4">
            <div className="col-md-6">
              <Heading3 content="Innovation and Creativity" className="heading03" />
            </div>
            <div className="col-md-6">
              <Body2
                content="A distinctive user experience and a website that stands out from the competition are two things that a creative web design company like ours can help you achieve."
                className="body02"
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
export default about;
