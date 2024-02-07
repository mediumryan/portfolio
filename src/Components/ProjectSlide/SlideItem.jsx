import { styled } from 'styled-components';
// icons
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

const SlideItemWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
    margin: 1.5rem 0.75rem;
    padding: 1.5rem;
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
            pointer-events: none;
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
        a {
            pointer-events: auto;
        }
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
export default function SlideItem({ item }) {
    return (
        <SlideItemWrapper key={item.id}>
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
        </SlideItemWrapper>
    );
}
