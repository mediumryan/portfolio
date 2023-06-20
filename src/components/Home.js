import React from "react";

export default function Home() {
  return (
    <div id="home">
      <div className="filter"></div>
      <section className="intro">
        <h3>
          Jonghyeok Lee
          <hr />
        </h3>
        <p>
          29 , Living in <span className="accent">Fukuoka-Yakuin.</span>
        </p>
        <p>
          Majored in Tourism Japanese and{" "}
          <span className="accent">Computer Science.</span>
        </p>
        <p>
          I am studying passionately to become a{" "}
          <span className="accent">front-end developer.</span>
        </p>
        <p>
          And, I can currently use{" "}
          <span className="accent">HTML, CSS, JavaScript, React, Git</span>,
          etc. for front-end development.
        </p>
      </section>
    </div>
  );
}
