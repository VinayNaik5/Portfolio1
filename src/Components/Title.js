import React from "react";

import introsvg from "../resources/title.svg";

export default function Into() {
  return (
    <div className="m-5 p-4  justify-content-center text-center row">
      <div className="fw-bold fs-1 col-12">Frontend Developer</div>
      <div className=" mt-4 font-monospace col-12">
        I design and code beautifully simple websites.{" "}
      </div>
      <img
        src={introsvg}
        alt=""
        className="col-12  m-5 mx-auto d-block"
        style={{ height: "300px" }}
      />
    </div>
  );
}
