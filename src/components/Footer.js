import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <h4>Links </h4>
          <ul className="list-unstyled">
            <li>About</li>
            <li> FAQ</li>
            <li>Eligibility</li>
            <li>Features</li>
            <li>Journey</li>
          </ul>
        </div>
        {/*column2*/}
        <div className="col">
          <h4>Contacts</h4>
          <ul className="list-unstyled">
            <li>Support@iconnect.com</li>
            <li>+1(0)000 0000 0001</li>
            <li>+1(0)000 0000 0002</li>
          </ul>
        </div>
        {/*column3*/}
        <div className="col">
          <h4>Address</h4>
          <ul className="list-unstyled">
            <li>350 5th Ave,New York,NY</li>
            <li>10118,USA</li>
          </ul>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} iConnect | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
