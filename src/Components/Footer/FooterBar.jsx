import { FaGithub } from 'react-icons/fa';
import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
    border-top: 2px solid var(--white-200);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterInner = styled.div`
    ul {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        li {
            margin: 0.5rem;
            a {
                color: var(--black-100);
                svg {
                    width: 30px;
                    height: 30px;
                    transition: 300ms transform;
                }
                &:hover svg {
                    transform: scale(1.05) rotate(15deg);
                }
            }
        }
    }
`;

export default function FooterBar() {
    return (
        <FooterWrapper>
            <FooterInner>
                <p>© 2023. Ryan All rights reserved.</p>
                <ul>
                    <li>
                        <a href="https://github.com/mediumryan" target="blank">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://medium-ryan.tistory.com/"
                            target="blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 459 459"
                            >
                                <title>티스토리 로고</title>
                                <g>
                                    <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
            </FooterInner>
        </FooterWrapper>
    );
}
