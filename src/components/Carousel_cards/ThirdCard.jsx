import React from "react";
import CaroselImg from "./third_caro_img.png";
const ThirdCard = () => {
  return (
    <>
      <div className="card">
        <div className="card_caro_first container-fluid">
          <div className="row w-100">
            <div className="carousel_col_first col-6">
              <h3>
                Stay up to date on your
                <br /> industry
              </h3>
              <p>
                From Live videos, to stories, to newsletters
                <br /> and more, LinkedIn is full of ways to stay
                <br /> up to date on the latest discussions in
                <br />
                your industry
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
export default ThirdCard;
