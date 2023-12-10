import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// atom data
import { nowTypeState, projectState } from '../../Data/atom';
// icons
import SlideItem from './SlideItem';

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
            {nowType !== 'all'
                ? project
                      .filter((a) => a.type === nowType)
                      .map((item) => {
                          return <SlideItem item={item} />;
                      })
                : project.map((item) => {
                      return <SlideItem item={item} />;
                  })}
        </ProjectCarousel>
    );
}
