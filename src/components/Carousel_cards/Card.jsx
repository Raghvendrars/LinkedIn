import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import OpenToWork from "./OpenToWork.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card_caro_first container-fluid">
          <div className="row w-100">
            <div className="carousel_col_first col-6">
              <h3>
                Let the right people know
                <br /> you’re open to work
              </h3>
              <p>
                With the Open To Work feature, you can
                <br /> privately tell recruiters or publicly share
                <br /> with the LinkedIn community that youre looking for new
                job opportunities
              </p>
            </div>
            <div className="carousel_col_second col-6">
              <img src={OpenToWork} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
