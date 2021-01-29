import React from "react";
import "./ConnectPeople.css";
import "bootstrap/dist/css/bootstrap.css";
import {GoTriangleDown} from "react-icons/go";
import TwoPeople from "./two_people.svg";
import OneGirl from "./OneGirl.svg";
const ConnectPeople = () => {
  return (
    <>
      <section className="Connect_People">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="two_people">
                <img
                  src={TwoPeople}
                  className="two_people_img"
                  alt="Two People"
                />
              </div>
              <h1 className="tagline">
                Connect with people
                <br /> who can help
              </h1>
              <button type="button" className="find_button">
                Find people you know
              </button>
            </div>
            <div className="col-6">
              <div className="two_people">
                <img
                  src={OneGirl}
                  className="two_people_img"
                  alt="Two People"
                />
              </div>
              <h1 className="tagline">
                Learn the skills that<br /> can help you now
              </h1>
              <div className="dropdown">
              <button class="dropbtn text-left pl-3">Choose a topic to learn about   <GoTriangleDown  className="text-right ml-4 text-secondary" /></button>
              <div class="dropdown-content">
              <div><a href="#">Training and Education<br /><p>290+ Couses</p></a>
              </div>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectPeople;
