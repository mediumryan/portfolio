import React from 'react';
import Greeting from '../Components/Greeting';
import { styled } from 'styled-components';
import Intro from '../Components/Intro';
import Skills from '../Components/Skills';
import GoProject from '../Components/GoProject';
import Contact from '../Components/Contact';

const Grid = styled.div`
    height: 100%;
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 12px;
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
