import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../project_data.js";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

export default function Project(props){ 
  const {id} = useParams();
  const {title, content, bigImg} = data[id];
  return(
    <>
    <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          {title}
        </title>
        <meta
          name="description"
          content="Webalar range of IT services include web development, UI/UX design, graphics design, content writing, digital marketing, animated video production and more!"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://webalar.in/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Website Development Services - Graphics Design - Digital Marketing"
        />
        <meta
          property="og:description"
          content="Webalar range of IT services include web development, UI/UX design, graphics design, content writing, digital marketing, animated video production and more!"
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
          content="Website Development Services - Graphics Design - Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Webalar range of IT services include web development, UI/UX design, graphics design, content writing, digital marketing, animated video production and more!"
        />
        <meta
          name="twitter:image"
          content="https://webalar.in/static/media/webalar-og-image.png"
        />
    </Helmet>
    <Navbar />
    <div className="Project">
      <div className="container">
      <h1 className="heading02 daysOne">{title}</h1>
      <div className="content">
        <div className="pictures">
          <img src={bigImg} alt="image of site" width="90%" />
          {/* {icons.map(icon => {
            return(
              <img src={icon} alt={title} />
              )
          })} */}
        </div>
        <div className="desc">
          <h2>{title}</h2>
          <p className="mt-4 mb-1 client"> Webalar</p>
          {/* <p className="mt-1 mb-4 Services"> {span.toString()}</p> */}
          <p className="">{content}</p>
        </div>
      </div>
      </div>
    </div>
    <GetInTouch />
    <Contact />
    </>
  )
}