import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--margin-medium-large);
  width: 250px;
  height: 320px;
  border-radius: 12px;
  background: var(--main-decor-color);
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 300ms all;
  img {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0px 0px;
  }
  &:hover {
    box-shadow: 0 0 1.5rem gray;
  }
`;

export const CardsContent = styled.a`
  text-decoration: none;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    padding: var(--padding-small) var(--padding-micro);
    font-size: calc(var(--font-size-small) * 1.1);
    font-weight: 700;
    color: var(--main-fonts-color);
    font-family: var(--main-font-family);
    cursor: pointer;
  }
`;
