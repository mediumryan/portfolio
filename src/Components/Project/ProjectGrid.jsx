import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { projects } from '../../Data/atom';
import { FaAngleLeft, FaAngleRight, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 24px;
    width: 85%;
    height: 85%;
    position: relative;
`;

const GridContents = styled(motion.div)`
    position: relative;
    background: linear-gradient(var(--text-100), var(--text-200));
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    &:first-child {
        transform-origin: right bottom;
    }
    &:nth-child(2) {
        transform-origin: left bottom;
    }
    &:nth-child(3) {
        transform-origin: right top;
    }
    &:nth-child(4) {
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
    span {
        font-size: 20px;
        margin-top: 16px;
    }
`;

const GridBtn = styled.a`
    color: var(--accent-200);
    font-size: 24px;
    margin: 8px;
    margin-top: 16px;
    padding: 8px 24px;
    transition: 300ms all;
    &:hover {
        color: var(--accent-100);
    }
    &:last-child {
        font-size: 48px;
    }
`;

const SlideBtn = styled(motion.button)`
    font-size: 64px;
    padding: 36px;
    color: tomato;
    position: absolute;
    top: 50%;
    &:first-child {
        left: 0;
    }
    &:last-child {
        right: 0;
    }
`;
// variants
const grid_contents_variants = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
    },
    exit: {
        scale: 0,
    },
};

const slide_button_variants_left = {
    initial: {
        x: 0,
        y: '-50%',
    },
    hover: {
        x: -50,
        scale: 1.5,
        transition: {
            duration: 0.5,
            type: 'linear',
        },
    },
};
const slide_button_variants_right = {
    initial: {
        x: 0,
        y: '-50%',
    },
    hover: {
        x: 50,
        scale: 1.5,
        transition: {
            duration: 0.5,
            type: 'linear',
        },
    },
};

export default function ProjectGrid() {
    // 슬라이더
    const [project, setProject] = useRecoilState(projects);
    const [page, setPage] = useState(0);
    const offset = 4;
    const maxPage = Math.floor(project.length / offset) - 1;

    const GoNext = () => {
        setPage((prev) => (prev === maxPage ? 0 : prev + 1));
    };
    const GoPrev = () => {
        setPage((prev) => (prev === 0 ? maxPage : prev - 1));
    };

    return (
        <GridWrapper>
            {project.slice(page * offset, (page + 1) * offset).map((item) => {
                return (
                    <GridContents
                        key={item.id}
                        variants={grid_contents_variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 1,
                            type: 'spring',
                        }}
                    >
                        <GridImg src={item.image_path} />
                        <GridDescription>
                            <p>{item.title}</p>
                            <span>{item.tag}</span>
                            <GridBtn href={item.url_path} target="blank">
                                Go to Page
                            </GridBtn>
                            <GridBtn href={item.github_link} target="blank">
                                <FaGithub />
                            </GridBtn>
                        </GridDescription>
                    </GridContents>
                );
            })}
            <span>
                {page + 1}/{maxPage + 1}
            </span>
            <SlideBtn
                variants={slide_button_variants_left}
                initial="initial"
                whileHover="hover"
                onClick={GoNext}
            >
                <FaAngleLeft />
            </SlideBtn>
            <SlideBtn
                variants={slide_button_variants_right}
                initial="initial"
                whileHover="hover"
                onClick={GoPrev}
            >
                <FaAngleRight />
            </SlideBtn>
        </GridWrapper>
    );
}
