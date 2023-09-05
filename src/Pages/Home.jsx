import React from 'react';
import Greeting from '../Components/Greeting';
import { styled } from 'styled-components';
import Intro from '../Components/Home/Intro';
import Skills from '../Components/Home/Skills';
import GoProject from '../Components/Home/GoProject';
import Contact from '../Components/Home/Contact';

const Grid = styled.div`
    height: 100%;
    margin-top: var(--margin-very-large);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: var(--margin-medium);
    @media (max-width: 412px) and (max-height: 915px) {
        display: flex;
        flex-direction: column;
        padding: var(--padding-large) var(--padding-medium-large);
        * {
            margin-bottom: 12px;
        }
    }
`;
export default function Home() {
    return (
        <>
            <Greeting />
            <Grid>
                <Intro />
                <Skills />
                <GoProject />
                <Contact />
            </Grid>
        </>
    );
}
