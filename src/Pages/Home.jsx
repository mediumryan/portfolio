import { styled } from 'styled-components';
import Greeting from '../Components/Greeting/Greeting';
import Intro from '../Components/Intro/Intro';

export const PageWrapper = styled.div`
    background-color: var(--white-100);
    color: var(--black-100);
    height: 100vh;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;
export default function Home() {
    return (
        <PageWrapper>
            <Greeting />
            <Intro />
        </PageWrapper>
    );
}
