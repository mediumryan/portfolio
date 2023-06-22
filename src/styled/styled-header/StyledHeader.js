import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

export const HeaderContainer = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  position: fixed;
  top: 0;
  transition: 0.3s;
  z-index: 5;
  &:hover {
    opacity: 1;
    background: var(--main-header-background);
  }
  @media screen and (max-width: 413px) {
    background-color: var(--main-header-background);
    flex-direction: column;
    height: auto;
    padding: var(--padding-medium) 0;
  }
`;

export const HeaderTitle = styled.h1`
  letter-spacing: normal;
  font-family: var(--main-font-family);
  font-style: normal;
  font-size: var(--font-size-large);
  color: var(--main-fonts-color);
  text-shadow: 0px 0px 40px var(--main-decor-color);
  cursor: default;
  @media screen and (max-width: 413px) {
    font-size: var(--font-size-medium-large);
  }
`;

export const NavbarContainer = styled.nav`
  @media screen and (max-width: 413px) {
    width: 100%;
    display: ${(props) => (props.navshow ? "inline-flex" : "none")};
  }
  ul {
    list-style: none;
    position: relative;
    display: inline-flex;
    @media screen and (max-width: 413px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export const NavMenuItems = styled(Link)`
  margin: 2px;
  padding: var(--padding-micro) var(--padding-small);
  text-decoration: none;
  color: var(--main-fonts-color);
  font-family: var(--main-font-family);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 8px;
  &:hover {
    color: #000000;
    background: var(--main-decor-color);
  }
  @media screen and (max-width: 413px) {
    margin-top: var(--margin-small);
    width: 50%;
    text-align: center;
  }
`;

export const NavToggleBtn = styled(FaAlignJustify)`
  display: none;
  color: var(--main-fonts-color);
  font-size: var(--font-size-small);
  position: absolute;
  top: 24px;
  right: 36px;
  transition: 300ms all;
  &:hover {
    color: var(--main-decor-color);
  }
  @media screen and (max-width: 413px) {
    display: block;
  }
`;
