import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { styled } from 'styled-components';
// icons
import { BsBox } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CgClose } from 'react-icons/cg';

const HeaderBarWrapper = styled.header`
    position: relative;
    padding: 0.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--white-200) 0px -3px 2px -1.5px inset;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }
`;

const HeaderIcon = styled(Link)`
    svg {
        color: var(--accent-200);
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
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

const HeaderMenuItem = styled(Link)`
    position: relative;
    color: var(--black-100);
    padding: 0.5rem 0.75rem;
    margin: 0 0.5rem;
    text-decoration: none;
    font-size: 0.9rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;

const HeaderIsHere = styled.span`
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 3px;
    width: 75%;
    background-color: var(--accent-200);
`;

const MenuIcon = styled.button`
    display: none;
    position: absolute;
    top: 7.5px;
    right: 1%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0.5rem;
    svg {
        color: var(--accent-200);
        transition: 300ms all;
        width: 30px;
        height: 30px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: ${(props) => (props.isMenu ? 'none' : 'flex')};
    }
`;

export default function HeaderBar() {
    const isHomeMatch = useMatch('/');
    const isProjectsMatch = useMatch('/project');

    const [isMenu, setIsMenu] = useState(true);
    const handleMenu = () => {
        setIsMenu((prevMenu) => {
            return !prevMenu;
        });
    };

    return (
        <HeaderBarWrapper>
            <HeaderIcon to="/">
                <BsBox />
            </HeaderIcon>
            <HeaderMenu>
                {isMenu && (
                    <>
                        <HeaderMenuItem to="/">
                            Home
                            <HeaderIsHere
                                style={{
                                    display:
                                        isHomeMatch === null ? 'none' : 'block',
                                }}
                            />
                        </HeaderMenuItem>
                        <HeaderMenuItem to="/project">
                            Projects
                            <HeaderIsHere
                                style={{
                                    display:
                                        isProjectsMatch === null
                                            ? 'none'
                                            : 'block',
                                }}
                            />
                        </HeaderMenuItem>
                    </>
                )}
            </HeaderMenu>
            <MenuIcon onClick={handleMenu} isMenu={isMenu}>
                <IoMdArrowDropdown />
            </MenuIcon>
            <MenuIcon onClick={handleMenu} isMenu={!isMenu}>
                <CgClose />
            </MenuIcon>
        </HeaderBarWrapper>
    );
}
