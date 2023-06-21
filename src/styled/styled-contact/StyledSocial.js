import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: var(--margin-small);
    padding: var(--padding-medium);
    font-size: var(--font-size-medium-large);
    color: var(--main-fonts-color);
    cursor: pointer;
    transition: 300ms all;
    &:hover {
      color: var(--main-decor-color);
      transform: scale(1.05);
    }
  }
`;
