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
          Jonghyeok Lee　（ジョンヒョク　イ）
          <hr style={{ width: "70%" }} />
        </h3>
        <p>
          こんにちは、<span>韓国</span>から来ましたイジョンヒョクと申します。
          日本生活は今年で<span>4年目</span>になります。
          <br />
          最初の2年はホテルで勤務して、残り1年半は今の会社で働いています。
          少し遅い感じもありますがウェブコーディングに興味を持って勉強しています。
          <br />
          自分で作ったウェブページやアプリが人の役に立つなんて素晴らしいことだと思っています。
          また、いろんな言語を学び続けることも楽しいです。
          <br />
          今持っているスキルには{" "}
          <span>HTML, CSS, JavaScript(jQuery), React, Git, Github</span>
          などがあります。
          今後、モバイルアプリやゲームなども作れるプログラマーになりたいと思います。
        </p>
      </HomeIntro>
    </HomeContainer>
  );
}
