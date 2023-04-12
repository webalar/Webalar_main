import React from "react";
import Heading3 from "../components/Heading3";

function Project_Card(props) {
  return (
    <div className={props.className} id={props.id}>
        <a href={props.url} style={{textDecoration:"none",color:"black"}}>
        <div className="card border-0">
          <div style={{ position: "relative" }}>
            <img
              src={props.img}
              className="card-img-top rounded border dynamic_project_card"
              style={{}}
              alt="Webalar Company Projects"
            />
            <button
              className="btn bg-light rounded-5 body03 ps-4 pe-4"
              style={{ position: "absolute", left: "10px", bottom: "20px" }}
            >
              Web Development
            </button>
          </div>
          <div className="card-body ps-0">
            <Heading3 className="card-title heading03" content={props.title} />
          </div>
        </div>
    </a>
      </div>
  );
}

export default Project_Card;
