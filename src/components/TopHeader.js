// import styled-components
import {
  HeaderTitle,
  HeaderContainer,
  NavbarContainer,
  NavMenuItems,
} from "../styled/styled-header/StyledHeader";
import { Link } from "react-scroll";

export default function Navbar() {
  const linkArr = [
    { id: "link0", link: "home" },
    { id: "link0", link: "projects" },
    { id: "link0", link: "contact" },
  ];

  return (
    <HeaderContainer>
      <HeaderTitle>Ryan's Portfolio</HeaderTitle>
      <NavbarContainer>
        <ul>
          {linkArr.map((item) => (
            <NavMenuItems key={item.id}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                duration={100}
              >
                {item.link.toUpperCase()}
              </Link>
            </NavMenuItems>
          ))}
        </ul>
        <button className="hamburger"></button>
      </NavbarContainer>
    </HeaderContainer>
  );
}
