import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <h3>
        Contact.
        <hr />
      </h3>
      <p>Please, Contact Me.</p>
      <div className="email-tel">
        <div>
          <p className="">E-mail : </p>
          <p className="email-content">straightwind0726@gmail.com</p>
        </div>
        <div>
          <p>Tel : </p>
          <p>080-7361-1518</p>
        </div>
      </div>
      <div className="social-media">
        <a href="https://medium-ryan.tistory.com" target="blank">
          <p>BLOG</p>
        </a>
        <a href="https://github.com/mediumryan?tab=repositories" target="blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
