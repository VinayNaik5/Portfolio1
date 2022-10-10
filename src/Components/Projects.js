import React from "react";
import Project from "./Project";
import shoppingapp from "../resources/shoppingapp.png";
import quizapp from "../resources/Quizapp.PNG";
import landing1 from "../resources/Landing1.PNG";
import countrylist from "../resources/Countrylist.PNG";
export default function Projects() {
  return (
    <div>
      <div className="text-center m-5">
        <h1 className="fw-bold">My Works</h1>
      </div>
      <div className="m-5 p-4">
        <div className="row gap-4 align-items-center">
          <div className="">
            <Project
              imgurl={shoppingapp}
              details=" Web application for online shopping app. Displays the Image,
                price, rating and discount. Based on the availabaility of stock
                buying or add to cart option is shown"
              url="https://e-shopping-vinayn.netlify.app/"
            />
          </div>
          <div className="">
            <Project
              imgurl={quizapp}
              details="A quiz application wich shows 10 random questions and options
                associated with it"
              url="https://e-shopping-vinayn.netlify.app/"
            />
          </div>
          {/* <div className="">
            <Project
              imgurl={countrylist}
              details={`Web application list the all conuntires with Flag, Population and Area it cover`}
              url="https://countrylist-vinayn.netlify.app"
            />
          </div>
          <div className="">
            <Project
              imgurl={landing1}
              details="A sample landing page for a travel website"
              url="https://landing1-vinayn.netlify.app"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}