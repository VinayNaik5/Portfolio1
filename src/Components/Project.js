import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="col-lg-4 col-md-5 col-sm-9 col-12 ">
      <div className="card h-100 hoverwrap ">
        <img src={props.imgurl} alt="" className="card-img-top img-mywork" />
        <div className=" d-flex flex-column justify-content-center align-items-center hovercap p-1">
          {props.details}
          <a href={props.url} target="_blank" rel="noreferrer">
            {" "}
            <div className="justify-content-center mt-2 mx-3  ">
              <button className=" btn btn-outline-primary ">
                Go to website{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
