import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const HeaderTitle = styled.h1`
  letter-spacing: normal;
  font-family: var(--main-font-family);
  font-style: normal;
  font-size: var(--font-size-large);
  color: var(--main-fonts-color);
  text-shadow: 0px 0px 40px var(--main-decor-color);
  cursor: default;
`;

export const NavbarContainer = styled.nav`
  ul {
    list-style: none;
    position: relative;
    display: inline-flex;
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
`;
