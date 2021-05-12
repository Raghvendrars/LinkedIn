import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import CaroselImg from "./CarouselSecond.png";

const SecCard = () => {
  return (
    <>
      <div className="card">
        <div className="card_caro_first container-fluid">
          <div className="row w-100">
            <div className="carousel_col_first col-6">
              <h3>
                Conversations today could lead
                <br /> to opportunity tomorrow
              </h3>
              <p>
                Sending messages to people you know is
                <br /> a great way to strengthen relationships as
                <br /> you take the next step in your career
              </p>
            </div>
            <div className="carousel_col_second col-6">
              <img src={CaroselImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecCard;
