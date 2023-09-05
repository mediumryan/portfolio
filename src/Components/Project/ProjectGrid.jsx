import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { projects } from '../../Data/atom';
import { FaGithub } from 'react-icons/fa';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 24px;
    width: 85%;
    height: 85%;
`;

const GridContents = styled.div`
    position: relative;
    background: linear-gradient(var(--text-100), var(--text-200));
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transition: 300ms all;
    &:first-child {
        transform-origin: right bottom;
    }
    &:nth-child(2) {
        transform-origin: left bottom;
    }
    &:nth-child(3) {
        transform-origin: right top;
    }
    &:last-child {
        transform-origin: left top;
    }
    &:hover {
        transform: scale(1.15);
        background: linear-gradient(#000, #000);
    }
`;

const GridImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.33;
`;

const GridDescription = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--bg-100);
    font-size: 28px;
    font-weight: 700;
`;

const GridBtn = styled.a`
    color: var(--accent-100);
    font-size: 24px;
    margin: 8px;
`;

export default function ProjectGrid() {
    // 슬라이더
    const [project, setProject] = useRecoilState(projects);
    const [page, setPage] = useState(0);
    const offset = 4;
    const maxPage = Math.floor(project.length / offset) - 1;

    return (
        <GridWrapper>
            {project.slice(page * offset, (page + 1) * offset).map((item) => {
                return (
                    <GridContents key={item.id}>
                        <GridImg src={item.image_path} />
                        <GridDescription>
                            <p>{item.title}</p>
                            <GridBtn href={item.url_path} target="blank">
                                Go to Page
                            </GridBtn>
                            <GridBtn>
                                <FaGithub />
                            </GridBtn>
                        </GridDescription>
                    </GridContents>
                );
            })}
        </GridWrapper>
    );
}
