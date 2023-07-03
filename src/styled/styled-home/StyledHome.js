import styled, { keyframes } from "styled-components";

const falling = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const HomeContainer = styled.div`
  margin: auto;
  height: 100vh;
  color: var(--main-fonts-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const HomeFilter = styled.div`
  background: url("https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.2;
`;

export const HomeIntro = styled.section`
  color: var(--main-fonts-color);
  z-index: 1;
  margin: auto;
  padding: var(--padding-medium-large);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 413px) {
    padding: 0;
  }
  h3 {
    width: 40%;
  }
  div {
    margin-left: var(--margin-large);
    width: 60%;
    display: grid;
    grid-template-areas:
      "a b c"
      "d d d"
      "f f f"
      "e e e";
    grid-gap: 24px;
    .intro_items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  p {
    font-size: var(--font-size-medium);
    font-family: var(--main-font-family);
    text-align: left;
    animation: ${falling} 3s linear;
  }
  span {
    font-size: var(--font-size-medium);
    color: var(--main-decor-color);
  }
`;
