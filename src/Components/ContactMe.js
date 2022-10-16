import React from "react";
import linkedin from "../resources/linkedin.png";
import gmail from "../resources/gmail.png";
import twitter from "../resources/twitter.png";
import contact from "../resources/contact.svg"
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="p-5 m-1 ">
      <div className="h1 fw-bold text-center ">Reach Out to Me!</div>
      <div className="row justify-content-center my-4">
        <div className="col col-10 col-lg-8 col-md-6 col-sm-10 ">
          <p className=" pt-3 h5">
            Front End Developer Moving toward to Fullstack Development, with
            Experince of Two Years.{" "}
          </p>
          <p className="text-secondary py-3">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <p className="h6">
            Open for Opportunities: <span className="fw-bold">Yes</span>
          </p>
          <div className="d-flex gap-4 pt-3">
            <div className="icon">
              <a
                href="http://www.linkedin.com/in/vinayn98/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="" height={"50px"} />
              </a>
            </div>
            <div className="icon">
              <a
                href="mailto:vinaynn98@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="" height={"50px"} />
              </a>
            </div>
            <div className="icon">
              <a
                href="http://twitter.com/HelloVinayNaik"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="" height={"50px"} />
              </a>
            </div>
          </div>
        </div>
        <div className="col col-10 p-3 col-lg-4 col-md-4 col-sm-9 justify-content-center ">
          <img src={contact} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}
