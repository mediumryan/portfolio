import { styled } from 'styled-components';
// components
import { SectionWrapper } from '../Greeting/Greeting';
// icons
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.5rem;
    }
    a {
        display: flex;
        align-items: center;
        margin: 3rem 0;
        padding: 0.75rem 1.25rem;
        font-size: 1rem;
        background-color: var(--accent-200);
        color: var(--white-200);
        border-radius: 20px;
        transition: 300ms transform;
        svg {
            margin-left: 0.25rem;
        }
        &:hover {
            transform: scale(1.05);
        }
    }
`;

export default function ContactMe() {
    return (
        <SectionWrapper>
            <ContactWrapper>
                <p>언제든 연락주세요.</p>
                <Link to="/contact">
                    <span>Contact</span>
                    <FaPaperPlane />
                </Link>
            </ContactWrapper>
        </SectionWrapper>
    );
}
