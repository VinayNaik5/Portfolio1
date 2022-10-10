import React from "react";

import Logo from "../resources/HighResLogo.png";
export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg px-2 pt-3 mx-5 ">
      <div className="container-fluid ">
        <a className="navbar-brand h1" href="/">
          <img src={Logo} height={"50px"} alt=""></img>
        </a>
        <div className="d-flex">
          <a href="./contact">
            <button className="btn  btn-outline-primary rounded-3">
              Say Hello
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
