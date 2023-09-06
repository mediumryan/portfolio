import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { page, projects } from '../../Data/atom';
import { motion } from 'framer-motion';
import GridDescriptions from './GridDescriptions';
import SlideButtons from './SlideButtons';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: var(--margin-medium-large);
    width: 85%;
    height: 85%;
    position: relative;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
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

export default function ProjectGrid() {
    // 슬라이더
    const project = useRecoilValue(projects);
    const pages = useRecoilValue(page);

    return (
        <GridWrapper>
            {project.slice(pages * 4, (pages + 1) * 4).map((item) => {
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
                        <GridImg src={item.image_path} alt={item.title} />
                        <GridDescriptions item={item} />
                    </GridContents>
                );
            })}
            <SlideButtons />
        </GridWrapper>
    );
}
