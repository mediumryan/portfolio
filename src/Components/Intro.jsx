import { styled } from 'styled-components';

const IntroWrapper = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    background-color: blue;
`;

export default function Intro() {
    return <IntroWrapper>Intro</IntroWrapper>;
}
