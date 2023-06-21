// import styled-components
import {
  HeaderTitle,
  HeaderContainer,
  NavbarContainer,
  NavMenuItems,
} from "../styled/StyledHeader";

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
          {linkArr.map((item) => {
            return (
              <li key={item.id}>
                <NavMenuItems href={`#${item.link}`}>
                  {item.link.toUpperCase()}
                </NavMenuItems>
              </li>
            );
          })}
        </ul>

        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
}
