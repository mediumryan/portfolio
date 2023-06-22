// import styled-components
import { useState } from "react";
import {
  HeaderTitle,
  HeaderContainer,
  NavbarContainer,
  NavMenuItems,
  NavToggleBtn,
} from "../styled/styled-header/StyledHeader";
import { Link } from "react-scroll";

export default function Navbar() {
  const linkArr = [
    { id: "link0", link: "home" },
    { id: "link0", link: "projects" },
    { id: "link0", link: "contact" },
  ];
  const [navOn, setNavOn] = useState(true);
  const handleNav = () => {
    setNavOn(!navOn);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Ryan's Portfolio</HeaderTitle>
      <NavbarContainer navshow={navOn}>
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
      </NavbarContainer>
      <NavToggleBtn onClick={handleNav} />
    </HeaderContainer>
  );
}
