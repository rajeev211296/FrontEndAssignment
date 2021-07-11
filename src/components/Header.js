import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />

      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h1>
              A clinical research study for people with myelodyplastic syndromes
              with anemia
            </h1>
            <p>
              The study is to compare the effectiveness of a study drug versus a
              standard-of-care therapy. Individuals will be evaluated to
              determine eligibity to participate. Each person who qualifies will
              receive either the study drug or standard-of-care
              therapy,study-related medical exams ,study-related laboratory
              tests at no cost.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Check my eligibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
