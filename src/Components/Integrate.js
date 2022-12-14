import React, { useContext } from "react";
import Bgcontext from "../context/Bgcontext";
import ContactMe from "./ContactMe";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Title from "./Title";
export default function Integrate() {
  const [bg] = useContext(Bgcontext);
  return (
    <div>
      <div className={bg ? "bg-dark text-white" : "bg-white color-dark"} style={{"width":"100%"}}>
        <Navbar />
        <Title />
        <Projects />
        <Skills />
        <ContactMe/>
      </div>
    </div>
  );
}
