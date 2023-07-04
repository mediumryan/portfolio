import React from "react";
import styled from "styled-components";
import { HeaderContainer } from "../styled/styled-header/StyledHeader";

const FooterContainer = styled(HeaderContainer)`
  top: auto;
  bottom: 0;
  color: var(--main-fonts-color);

  p {
    opacity: 0.15;
    padding: 0 var(--padding-medium);
    line-height: 1.5;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        このページは[repl.it]のポートフォリオテンプレートを元に作成者がデザインを加えて作りました。
      </p>
    </FooterContainer>
  );
}
