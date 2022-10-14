import React from "react";
import skillMain from "../resources/skillMian.svg";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaHtml5,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiCss3, DiNodejs } from "react-icons/di";
import { SiFirebase, SiJavascript, SiMongodb } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
// import {IoLogoFirebase} from "react-icons/io"

import "./Skills.css";
export default function Skills() {
  return (
    <>
      <div className="pt-5 p-1 mt-3 m-1  ">
        <div className="row w-100 m-1">
          <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
            <img src={skillMain} alt="" />
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 col-12pt-5">
            <div className="text-center ">
              <h1 className="fw-bold">What I Develop</h1>
            </div>
            <div className="  d-md-flex d-sm-flex gap-4 p-5 pt-3 justify-content-center mt-1">
              <div className="d-flex gap-4">
                <div className=" iconsClass text-center ">
                  <FaReact size={60}></FaReact>
                  <p className="mt-3 ">ReactJS</p>
                </div>
                <div className="iconsClass text-center ">
                  <SiJavascript size={60}></SiJavascript>
                  <p className="mt-3  ">Javascript</p>
                </div>
                <div className="iconsClass text-center">
                  <FaPython size={60}></FaPython>
                  <p className="mt-3">Python</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="iconsClass text-center">
                  <FaHtml5 size={60}></FaHtml5>
                  <p className="mt-3 ">HTML</p>
                </div>
                <div className="iconsClass text-center">
                  <DiCss3 size={60}></DiCss3>
                  <p className="mt-3">CSS</p>
                </div>
                <div className="iconsClass text-center">
                  <FaBootstrap size={60}></FaBootstrap>
                  <p className="mt-3">Bootstrap</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="iconsClass text-center">
                  <DiNodejs size={60}></DiNodejs>
                  <p className="mt-3">NodeJS</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="fw-bold">Aspiring to Learn / Learning </h3>
            </div>
            <div className=" d-md-flex d-sm-flex gap-4 p-5 pt-3 justify-content-center mt-1 ">
              <div className="d-flex gap-4">
                <div className="iconsClass text-center">
                  <FaAngular className="" size={50}></FaAngular>
                  <p className="mt-3">Angular</p>
                </div>
                <div className="iconsClass text-center">
                  <FaAws className="" size={50} id="aws"></FaAws>
                  <p className="mt-3">AWS</p>
                </div>
                <div className="iconsClass text-center">
                  <SiMongodb size={50}></SiMongodb>
                  <p className="mt-3">MongoDB</p>
                </div>
                <div className="iconsClass text-center">
                  <FaSass className="" size={"50"}></FaSass>
                  <p className="mt-3 ">SASS</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="iconsClass text-center">
                  <GiDatabase className="" size={50}></GiDatabase>
                  <p className="mt-3">RDBMS</p>
                </div>
                <div className="iconsClass text-center">
                  <SiFirebase className="" size={50}></SiFirebase>
                  <p className="mt-3">Firebase</p>
                </div>
                <div className="iconsClass text-center">
                  <FaDocker className="" size={50}></FaDocker>
                  <p className="mt-3">Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
