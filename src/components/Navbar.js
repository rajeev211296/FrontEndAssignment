import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/logo.png" alt="logo" /> iConnect
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Journey</a>
          </li>
          <li>
            <a href="">Am I Eligibile?</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
