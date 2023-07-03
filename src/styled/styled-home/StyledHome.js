import styled from "styled-components";

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
  text-align: center;
  color: var(--main-fonts-color);
  z-index: 1;
  margin: auto;
  padding: var(--padding-medium-large);
  @media screen and (max-width: 413px) {
    padding: 0;
  }
  p {
    margin: var(--margin-medium) var(--margin-micro);
    padding: 0 calc(var(--padding-large) * 5);
    font-size: var(--font-size-medium);
    font-family: var(--main-font-family);
    line-height: 1.5;
    text-align: left;
    span {
      color: var(--main-decor-color);
    }
  }
  a {
    color: var(--main-decor-color);
    font-size: var(--font-size-large);
    transition: 300ms all;
    border: 3px solid transparent;
    &:hover {
      color: var(--main-fonts-color);
      border-bottom: 3px solid var(--main-decor-color);
    }
  }
`;
