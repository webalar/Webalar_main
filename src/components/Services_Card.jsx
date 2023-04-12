import React, { useState } from "react";
import Heading2 from "../components/Heading2";
import Body2 from "../components/Body2";
import Lottie from "lottie-react";


function Services_Card(props) {
  const [btn_text, setText] = useState("What we offer >");
  function handleClick() {
    if (btn_text === "What we offer >") {
      setText("What we offer >");
    } else {
      setText("What we offer >");
    }
  }

  return (
    <div className="serviceCard">
      <a href={props.url} style={{color: "black", textDecoration: "none"}}>
        <div className="container">
          <div className="row ps-4 pe-4">
            <div className="col-12">
              <div className="card mb-5 shadow p-4">
                {props.index === 0 || props.index === 4 ? (
                  <div>
                    <img
                      src={require("../images/bestseller.png")}
                      alt="Webalar Company Web Design and Development Services"
                      style={{
                        position: "absolute",
                        right: "-0.938rem",
                        top: "-0.938rem",
                        width: "120px",
                      }}
                    />
                    <div
                      className="text-light"
                      style={{
                        position: "absolute",
                        top: "33.5px",
                        right: "3px",
                        transform: "rotate(45deg)",
                      }}
                    >
                      Best Seller
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col">
                        <div className="card-body ">
                          <Heading2
                            className="card-title heading02 serviceCardTitle"
                            content={props.title}
                          />
                          <Body2
                            className="card-text body02"
                            content={props.content}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="collapse d-lg-block"
                      id={"collapseExample" + props.index}
                    >
                      <div className="row">
                        {props.img.map((img, index) => {
                          return (
                            <div className="col-md-6 ">
                              <div
                                className="card-body"
                                style={{ display: "flex" }}
                              >
                                <img
                                  src={img}
                                  alt="Web Design and Development Services"
                                  style={{ height: "1.5em" }}
                                  className="me-2"
                                />
                                <span style={{ display: "flex" }}>
                                  {props.span[index]}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <p>
                      <a
                        className="d-lg-none ms-3"
                        data-bs-toggle="collapse"
                        href={"#collapseExample" + props.index}
                        role="button"
                        aria-expanded="false"
                        aria-controls={"collapseExample" + props.index}
                        style={{ color: "#181818", paddingBottom: "2em" }}
                        onClick={handleClick}
                      >
                        {btn_text}
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 order-first order-md-2 services_card_img">
                    <Lottie
                      animationData={props.big_img}
                      style={{ height: "17em", width: "17em" }}
                      class="servicesLottieImages"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Services_Card;
