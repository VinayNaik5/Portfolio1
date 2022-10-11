import React, {  useContext } from "react";
import Bgcontext from "../context/Bgcontext";
import Logo from "../resources/HighResLogo.png";

export default function Navbar() {

  const [bg,setBg]  = useContext(Bgcontext)

  return (
    <div className="navbar navbar-expand-lg px-2 pt-3 mx-5 ">
        <div className="container-fluid ">
          <a className="navbar-brand h1" href="/">
            <img src={Logo} height={"50px"} alt=""></img>
          </a>
          <div className="d-flex">
            <div className="form-check form-switch p-2 pe-3  navswitch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={()=>{
                  setBg(bg===false?true:false)
                }}
              />
              {/* <label className="" for="">
                Right
              </label> */}
            </div>
            <a href="/">
              <button className="btn btn-outline-primary rounded-3">
                Say Hello
              </button>
            </a>
          </div>
        </div>
    </div>
  );
}
