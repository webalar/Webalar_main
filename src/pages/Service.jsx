import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

import data from "../data.js";
import { useParams } from "react-router-dom";
import FAQCard from "../components/faq";

function Service(props) {
  let { id } = useParams();
  const idF = data.findIndex(element => element.title.replaceAll(' ','').replaceAll('/','') === id);
  console.log(idF);
  // id = 0;

  const {
    metaTitle,
    metaDesc,
    title,
    titleBg,
    content,
    mainImage,
    heading,
    subheading,
    stack,
    features,
    faqData,
    redirect,
  } = data[idF];

  if(redirect){console.log(window.location=redirect)}

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
    <div className="service initial_margin_a">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          {title}
        </title>
        <meta
          name="description"
          content={metaDesc}
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={metaTitle}
        />
        <meta
          property="og:description"
          content={metaDesc}
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
          content={metaTitle}
        />
        <meta
          name="twitter:description"
          content={metaDesc}
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

      <div className="serviceHero">
        <div className="serviceTitle mb-5">
          <h1
            className="heading01 daysOne mb-4 ms-3"
            dangerouslySetInnerHTML={{ __html: titleBg }}
          ></h1>
          <p className="ms-3">{content}</p>
        </div>
        <div className="serviceImg">
          <img src={mainImage} alt={title} />
        </div>
      </div>

      <div className="serviceStack container mt-5 mb-5">
        <div className="stackHeading text-center">
          <p>{subheading.toUpperCase()}</p>
          <h2 className="heading03 daysOne">{heading}</h2>
        </div>
        <div className="stackCards mt-4">
          {stack.map((obj, i) => {
            return (
              <div className={`stackCard ${obj.title===" " && "invisibleCard"}`} key={i}>
                <div className={`stackCardHeader`}>
                  {obj.image!=="" &&
                  <img src={obj.image} alt={obj.title} /> 
                  }
                  <h3>{obj.title}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: obj.content }}></p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="serviceFeatures container mt-5 mb-5">
        <div className="stackHeading text-center stackHeading">
          <p>Features</p>
          <h2 className="heading03 daysOne mb-5">
            Our Features that you can use
          </h2>
        </div>
        <div className="serviceFeatureMain mb-5">
        {features[0].title!=="" &&  
          <div className="featureOne">
            <div className="featureImg">
              <img src={require("../images/feature1.png")} alt="features" />
            </div>
            <div className="featureContent">
              <h3 className="quicksand">{features[0].title}</h3>
              <p>{features[0].content}</p>
            </div>
          </div>
          }
          <div className="featureTwo">
            <div className="featureImg">
              <img src={require("../images/feature2.png")} alt="features" />
            </div>
            <div className="featureContent">
              <h3 className="quicksand">{features[1].title}</h3>
              <p>{features[1].content}</p>
            </div>
          </div>
        </div>
      </div>

      {faqData.length>0 &&   
      <div className="serviceFaq container">
        <div className="stackHeading text-center stackHeading">
          <p>FAQ</p>
          <h2 className="heading03 daysOne mb-5">
            Most frequently asked questions
          </h2>
        </div>
        <div className="faqMain">
          <div className="faqLeft">
            {faqData.map((faqContent, i) => {
              if(i%2===0){
                return(
                  <FAQCard question={faqContent.question} answer={faqContent.answer} key={i}   />
                )
              }
            })}
          </div>
          <div className="faqRight">
            {faqData.map((faqContent, i) => {
              if(i%2!==0){
                return(
                  <FAQCard question={faqContent.question} answer={faqContent.answer} key={i}   />
                )
              }
            })}
          </div>
        </div>
      </div>
      } 

      <GetInTouch />
      <Contact />
    </div>
  );
}

export default Service;
