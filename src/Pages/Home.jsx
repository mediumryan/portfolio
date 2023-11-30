import { useMatch } from 'react-router-dom';
import { styled } from 'styled-components';

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
    return <PageWrapper>hi</PageWrapper>;
}
