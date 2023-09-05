import { motion } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { styled } from 'styled-components';

const SlideBtn = styled(motion.button)`
    font-size: var(--font-size-huge);
    padding: var(--padding-large);
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

export default function SlideButtons({ maxPage, setPage }) {
    const GoNext = () => {
        setPage((prev) => (prev === maxPage ? 0 : prev + 1));
    };
    const GoPrev = () => {
        setPage((prev) => (prev === 0 ? maxPage : prev - 1));
    };

    return (
        <>
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
        </>
    );
}
