import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: auto;
  padding-bottom: 20px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--main-fonts-color);
  p {
    padding: 10px;
    text-align: center;
    font-size: calc(var(--font-size-small) * 1.3);
    font-family: var(--main-font-family);
  }
`;

export const EmailTel = styled.div`
  margin: 2rem 0;
  p {
    display: flex;
    align-items: center;
    span:first-child {
      width: 120px;
    }
    span:nth-child(2) {
      color: var(--main-decor-color);
      font-weight: 700;
    }
  }
`;
