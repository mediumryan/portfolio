import { FaChessBoard } from 'react-icons/fa';
import { Link, useMatch } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderBarWrapper = styled.header`
    padding: 1rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--white-200) 0px -3px 2px -1.5px inset;
`;

const HeaderIcon = styled(Link)`
    svg {
        color: var(--accent-100);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 0.5px solid var(--white-200);
        padding: 0.25rem;
    }
`;

const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderMenuItem = styled(Link)`
    text-decoration: none;
    color: var(--black-100);
    padding: 0.5rem 0.75rem;
    margin: 0 0.5rem;
    position: relative;
`;

const HeaderIsHere = styled.span`
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 3px;
    width: 75%;
    background-color: var(--accent-100);
`;

export default function HeaderBar() {
    const isHomeMatch = useMatch('/');
    const isProjectsMatch = useMatch('/projects');

    return (
        <HeaderBarWrapper>
            <HeaderIcon to="/">
                <FaChessBoard />
            </HeaderIcon>
            <HeaderMenu>
                <HeaderMenuItem to="/">
                    Home
                    <HeaderIsHere
                        style={{
                            display: isHomeMatch === null ? 'none' : 'block',
                        }}
                    />
                </HeaderMenuItem>
                <HeaderMenuItem to="/projects">
                    Projects
                    <HeaderIsHere
                        style={{
                            display:
                                isProjectsMatch === null ? 'none' : 'block',
                        }}
                    />
                </HeaderMenuItem>
            </HeaderMenu>
        </HeaderBarWrapper>
    );
}
