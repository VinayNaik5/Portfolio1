import React, { useContext } from "react";
import Bgcontext from "../context/Bgcontext";
import Logo from "../resources/HighResLogo.png";

import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const [bg, setBg] = useContext(Bgcontext);

  return (
    <div className="navbar navbar-expand-lg px-2 py-3">
      <div className="container ">
        <a className="navbar-brand h1" href="/">
          <img src={Logo} height={"50px"} alt=""></img>
        </a>
        <button
          className=" m-0 border btn btn-outline-primary navbar-toggler"
          type="button  "
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <AiOutlineMenu />
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item m-2 p-2 ">
              <div className="d-flex h4 pe-2 ">
                <div className="pe-1 pe-3 ">
                  <MdOutlineLightMode />
                </div>

                <div className="form-switch ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => {
                      setBg(bg === false ? true : false);
                    }}
                  />
                </div>
                <div className="pe-2">
                  <MdOutlineModeNight />
                </div>
              </div>
            </li>
            <li className="nav-item m-2 p-2 ">
              <a href="/">
                <button className="btn btn-outline-primary rounded-3">
                  Say Hello
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
