import React from "react";
import {
  HomeContainer,
  HomeFilter,
  HomeIntro,
} from "../styled/styled-home/StyledHome";

export default function Home() {
  return (
    <HomeContainer>
      <HomeFilter id="home"></HomeFilter>
      <HomeIntro>
        <h3>
          Jonghyeok Lee
          <hr />
        </h3>
        <p>
          29 , Living in <span>Fukuoka-Yakuin.</span>
        </p>
        <p>
          Majored in Tourism Japanese and <span>Computer Science.</span>
        </p>
        <p>
          I am studying passionately to become a{" "}
          <span>front-end developer.</span>
        </p>
        <p>
          And, I can currently use{" "}
          <span>HTML, CSS, JavaScript, React, Git, etc.</span> for front-end
          development.
        </p>
      </HomeIntro>
    </HomeContainer>
  );
}
