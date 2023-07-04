import React, { useState } from "react";
import {
  HomeContainer,
  HomeFilter,
  HomeIntro,
} from "../styled/styled-home/StyledHome";

export default function Home() {
  const [title, setTitle] = useState([
    { id: 0, title: "Nation", value: "Korea" },
    { id: 1, title: "Age", value: "29" },
    { id: 2, title: "Residence", value: "Yakuin-Fukuoka" },
    {
      id: 3,
      title: "Strength1",
      value:
        "I am a quick learner on the job and can quickly acquire new knowledge and skills.",
    },
    {
      id: 4,
      title: "Strength2",
      value: "I am confident in working with my team members.",
    },
    {
      id: 5,
      title: "Reason for turnover",
      value:
        "I became interested in how the web, apps, and games that I use in my daily life are created, and decided to learn. Also, I was fascinated by the fact that I could create something by myself as long as I had the knowledge. Finally, I thought that being a developer was a career with a future.",
    },
  ]);

  return (
    <HomeContainer>
      <HomeFilter id="home"></HomeFilter>
      <HomeIntro>
        <h3>
          Jonghyeok Lee
          <hr style={{ width: "70%" }} />
        </h3>
        <div>
          {title.map((item) => {
            return (
              <div className="intro_items">
                <span>{item.title}</span>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </HomeIntro>
    </HomeContainer>
  );
}
