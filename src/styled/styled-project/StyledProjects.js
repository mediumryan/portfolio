import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: calc(var(--margin-large) * 3);
  padding: 0 calc(var(--padding-large) * 5);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--main-fonts-color);
  h3 {
    padding-top: calc(var(--padding-large) * 2);
  }
  p {
    font-family: var(--main-font-family);
    font-size: var(--font-size-small);
    padding: var(--padding-small);
  }
`;

export const ProjectsBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: var(--padding-medium);
  button {
    margin: 0 var(--margin-small);
    padding: var(--padding-small) var(--padding-medium);
    font-size: var(--font-size-small);
    border: none;
    border-radius: 10px;
    color: var(--main-fonts-color);
    background: var(--main-decor-color);
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 28px 0px rgba(0, 169, 226, 0.75);
    -moz-box-shadow: 10px 10px 28px 0px rgba(0, 169, 226, 0.75);
    box-shadow: 10px 10px 28px 0px rgba(0, 169, 226, 0.75);
    transition: 300ms all;
    &:hover {
      color: var(--main-background);
      box-shadow: none;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: var(--padding-medium-large);
`;
