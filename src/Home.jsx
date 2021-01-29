import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "./components/Carousel_cards/Card.css";
import FindJobs from "./components/FindJobs";
import Carousel from "react-elastic-carousel";
import ConnectPeople from "./components/Connect_people/ConnectPeople";
import Card from "./components/Carousel_cards/Card";
import SecCard from "./components/Carousel_cards/SecCard";
import ThirdCard from "./components/Carousel_cards/ThirdCard";
import Svgfile from "./mysvg.svg";
import { BsChevronRight } from "react-icons/bs";
import "./Home.css";

function Home() {

  // Carousel
  const breakPoint=[
    {width:1000, itemToShow:1},
    {width:1000, itemToShow:2},
    {width:1000, itemToShow:3},
  ]
  
  return (
    <>
      <div className="hero_section">
        <div className="hero_section_row">
          <div className="hero_section_col">
            <div className="hero_section_taglines">
              <h1 className="header-text pt-5">
                Welcome to your
                <br />
                professional community
              </h1>
              <div className="boxes pt-5">
                <div className="option_box">
                  <h5 className="option_box_main">
                    Search for a job <BsChevronRight className="float-right" />
                  </h5>
                </div>
                <div className="option_box">
                  <h5 className="option_box_main">
                    Find a person you know{" "}
                    <BsChevronRight className="float-right" />
                  </h5>
                </div>
                <div className="option_box">
                  <h5 className="option_box_main">
                    Learn a new skill <BsChevronRight className="float-right" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_section_col">
            <img src={Svgfile} className="svgimage pt-5" alt="Svg image" />
          </div>
        </div>
      </div>

      {/* FindJobs */}
      <FindJobs />

      {/* Section 3 */}

      

      {/* Post a job section */}
      <section className="postJobs">
       <div className="container-fluid">
         <div className="row">
           <div className="post_job_col col-5 "><h1 className="post_job_tagline">Post your job and find<br /> the people you need</h1></div>
           <div className="post_job_col col-7">
             <button type="button" id="post_job_btn" className="post_job_btn"><h5 className="post_job_btn_text">Post a Job</h5></button> </div>
         </div>
       </div>
      </section>
      <section className="">
       <Carousel breakPoints={breakPoint}>
         <Card number="1" />
         <SecCard number="2" />
         <ThirdCard number="3" />
       </Carousel>
      </section>
      {/* Connect People */}
      <ConnectPeople />
    </>
  );
}

export default Home;
