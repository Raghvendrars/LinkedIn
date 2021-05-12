import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.min.js";
// import "./components/Carousel_cards/Card.css";
import FindJobs from "./components/FindJobs";
import Lastimg from "./components/Shiny-White-And-Green-Paint.jpg";
import Carousel from "react-elastic-carousel";
import logo from "./components/LinkedIn-Logo.png";
import ConnectPeople from "./components/Connect_people/ConnectPeople";
import Card from "./components/Carousel_cards/Card";
import SecCard from "./components/Carousel_cards/SecCard";
import ThirdCard from "./components/Carousel_cards/ThirdCard";
import Svgfile from "./mysvg.svg";
import { BsChevronRight } from "react-icons/bs";
import "./Home.css";

function Home() {
  // Carousel
  const breakPoint = [
    { width: 1000, itemToShow: 1 },
    { width: 1000, itemToShow: 2 },
    { width: 1000, itemToShow: 3 },
  ];

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
            <div className="post_job_col col-5 ">
              <h1 className="post_job_tagline">
                Post your job and find
                <br /> the people you need
              </h1>
            </div>
            <div className="post_job_col col-7">
              <button type="button" id="post_job_btn" className="post_job_btn">
                <h5 className="post_job_btn_text">Post a Job</h5>
              </button>{" "}
            </div>
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
      <section className="youtube_section">
        <div className="container-fluid">
          <div className="youtube_row row">
            <div className="youtube_vid_div col-6">
              <div className="youtube_vid">
                <iframe
                  width="550"
                  height="350"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
                ></iframe>
              </div>
            </div>
            <div className="youtube_text_div col-6">
              <div className="youtube_text">
                <h2 className="youtube_text_first">In it to chase my dream</h2>
                <p id="youtube_text_second">
                  Check out Gayatri's story of
                  <br /> finding a new job on LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* last */}
      <section className="get_started_section">
        <div className="get_started_row row w-100">
          <div className="get_started">
            <h1 id="get_started_text">
              Join your colleagues, classmates, and
              <br /> friends on LinkedIn.
            </h1>
            <button className="get_start_button">Get Started</button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="link_footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <img className="footer_logo" src={logo} />
            </div>
            <div className="col-3">
              <div className="footer_general">
                <h6 className="footer_heading">General</h6>
                <ul className="footer_ul">
                  <li className="footer_li">
                    <a href="#">Sign Up</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Help Center</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">About</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Press</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Blog</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Careers</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Developers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer_browser">
                <h6 className="footer_browser_heading">Browse LinkedIn</h6>
                <ul className="footer_ul">
                  <li className="footer_li">
                    <a href="#">Learning</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Salary</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Mobile</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Servives</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer_browser">
                <h6 className="footer_browser_heading">Business Solutions</h6>
                <ul className="footer_ul">
                  <li className="footer_li">
                    <a href="#">Talent</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Marketing</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Sales</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Learning</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer_browser">
                <h6 className="footer_browser_heading">Directories</h6>
                <ul className="footer_ul">
                  <li className="footer_li">
                    <a href="#">Members</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Companies</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Salaries</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Featured</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Learning</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Posts</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Articles</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Schools</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">News</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">News Latters</a>
                  </li>
                  <li className="footer_li">
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="last_footer">
        <div className="container">
          <ul className="last_footer_ul">
            <li className="last_footer_li">
              <a href="#">
                <img className="last_footer_logo" src={logo} />
              </a>
            </li>
            <li className="last_footer_li">
              <a href="#">© 2021</a>
            </li>
            <li className="last_footer_li">
              <a href="#">About</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Accessility</a>
            </li>
            <li className="last_footer_li">
              <a href="#">User Agreement</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Cookie Policy</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Copyright Policy</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Brand Policy</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Guest Controls</a>
            </li>
            <li className="last_footer_li">
              <a href="#">Comunity Guidlines</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
