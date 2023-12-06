import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// atom data
import { nowTypeState, projectState } from '../../Data/atom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const ProjectCarousel = styled(Carousel)`
    width: 100%;
    a {
        height: 250px;
        margin: 12px;
        padding: 24px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--accent-200);
        cursor: pointer;
        &:hover {
            background-color: var(--white-200);
        }
        img {
            width: 100%;
            min-height: 125px;
        }
        span {
            font-size: 1rem;
            margin-top: 12px;
            padding: 0 1rem;
            text-align: center;
            line-height: 1.25;
        }
    }
`;

export default function LineUpSlider() {
    const project = useRecoilValue(projectState);
    const nowType = useRecoilValue(nowTypeState);

    return (
        <ProjectCarousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {project
                .filter((a) => a.type === nowType)
                .map((item) => {
                    return (
                        <a href={item.url_path} target="blank" key={item.id}>
                            <img src={item.image_path} alt={item.title} />
                            <span>{item.title}</span>
                        </a>
                    );
                })}
        </ProjectCarousel>
    );
}
