import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// atom data
import { nowTypeState, projectState } from '../../Data/atom';
// icons
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

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
`;

const CarouselItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 420px;
    margin: 12px;
    padding: 24px;
    border-radius: 10px;
    color: var(--black-100);
    background-color: var(--accent-300);
    transition: 300ms all;
    img {
        flex-basis: 50%;
        width: 100%;
        min-height: 125px;
    }
    .slide_hover {
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.85);
        color: var(--white-100);
        border-radius: 10px;
        transition: 300ms all;
        a {
            font-size: 1.5rem;
            margin: 0.5rem;
            padding: 0.25rem;
            color: var(--accent-100);
            cursor: pointer;
            svg {
                transition: 300ms transform;
            }
            &:hover svg {
                transform: scale(1.15);
            }
        }
    }
    &:hover .slide_hover {
        opacity: 1;
    }
`;

const SlideDescription = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
        flex-basis: 40%;
        font-size: 1.25rem;
        line-height: 1.5;
        text-align: center;
        margin-top: 1rem;
    }
    p {
        flex-basis: 50%;
        font-size: 0.9rem;
        line-height: 1.25;
        padding: 0 1rem;
        margin: 1rem 0;
        max-height: 75%;
        overflow: scroll;
        color: var(--black-100);
    }
`;

const SlideTag = styled.span`
    flex-basis: 10%;
    font-size: 0.75rem;
    color: var(--black-200);
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
                        <CarouselItem key={item.id}>
                            <img src={item.image_path} alt={item.title} />
                            <SlideDescription>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <SlideTag>#{item.tag}</SlideTag>
                            </SlideDescription>
                            <div className="slide_hover">
                                <div>
                                    <a href={item.url_path} target="blank">
                                        <FaLocationArrow />
                                    </a>
                                    <a href={item.github_link} target="blank">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    );
                })}
        </ProjectCarousel>
    );
}
