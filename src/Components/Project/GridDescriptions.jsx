import { FaGithub } from 'react-icons/fa';
import { styled } from 'styled-components';

const GridDescription = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    padding: var(--padding-medium-large);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--bg-100);
    font-size: var(--font-size-medium);
    font-weight: 700;
    span {
        font-size: var(--font-size-small);
        margin-top: var(--margin-medium);
    }
`;

const GridBtn = styled.a`
    color: var(--accent-200);
    font-size: var(--font-size-medium);
    margin: var(--padding-small);
    margin-top: var(--padding-medium);
    padding: var(--padding-double-medium);
    transition: 300ms all;
    &:hover {
        color: var(--accent-100);
    }
    &:last-child {
        font-size: var(--font-size-large);
    }
`;

export default function GridDescriptions({ item }) {
    return (
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
    );
}
