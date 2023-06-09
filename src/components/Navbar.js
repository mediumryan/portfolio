import React from "react";

export default function Navbar() {
  return (
    <header>
      <a className="logo" href="#home">
        <h1 className="nav-title">Ryan's Portfolio</h1>
      </a>
      <nav>
        <ul className="nav-bar">
          <div className="bg"></div>
          <li>
            <a className="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
