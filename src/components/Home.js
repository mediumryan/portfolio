import React, { useState } from "react";
import {
  HomeContainer,
  HomeFilter,
  HomeIntro,
} from "../styled/styled-home/StyledHome";

export default function Home() {
  const [title, setTitle] = useState([
    { id: 0, title: "国籍", value: "韓国 （日本生活4年目）" },
    { id: 1, title: "年齢", value: "29才" },
    { id: 2, title: "居住", value: "福岡　薬院" },
    {
      id: 3,
      title: "長所1",
      value: "仕事の学習が早く、新しい知識やスキルを素早く習得できます。",
    },
    {
      id: 4,
      title: "長所2",
      value: "チームメンバーとの協力に自信があります。",
    },
    {
      id: 5,
      title: "離職理由",
      value:
        "日常で触れるウェブやアプリ、そしてゲームがどのように作られているのかに興味を持ち、学習することになりました。また知識さえあれば自分自身が何かを創り出せることに魅力を感じました。最後に開発者は将来性のある職業だと思ったからです。",
    },
  ]);

  return (
    <HomeContainer>
      <HomeFilter id="home"></HomeFilter>
      <HomeIntro>
        <h3>
          イ ジョンヒョク
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
