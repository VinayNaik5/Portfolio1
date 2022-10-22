import React from "react";

import introsvg from "../resources/title.svg";

export default function Into() {
  return (
    <div className="m-5 p-4  justify-content-center text-center row">
      <div className="fw-bold fs-1 col-12">Frontend Developer</div>
      <div className=" mt-4 font-monospace col-12">
        <div className="fw-bolder h5">
          Hi, I am Vinay Naik, Nice to meet you.
        </div>
        I design and code beautifully simple websites. I have experince in
        working react js (Front end for a year). I have two years experinace of
        working for a MNC where i worked on Python, Flask and React js.
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
