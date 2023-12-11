import { styled } from 'styled-components';
// components
import { SectionWrapper } from '../Greeting/Greeting';
// icons
import { IoMdMail } from 'react-icons/io';
import { MdOutlineSmartphone } from 'react-icons/md';

const ContactWrapper = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 700;
    }
`;

const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
    li {
        padding: 0.25rem;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        font-size: 1.05rem;
        span {
            svg {
                width: 30px;
                height: 30px;
                color: var(--accent-200);
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: 20px;
                    height: 20px;
                }
            }
        }
        span:first-child {
            margin-right: 0.5rem;
        }
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;

export default function ContactMe() {
    return (
        <SectionWrapper>
            <ContactWrapper>
                <p>Contact Me</p>
                <ContactList>
                    <li>
                        <span>
                            <IoMdMail />
                        </span>
                        <span>straightwind0726@gmail.com</span>
                    </li>
                    <li>
                        <span>
                            <MdOutlineSmartphone />
                        </span>
                        <span>080-7361-1518</span>
                    </li>
                </ContactList>
            </ContactWrapper>
        </SectionWrapper>
    );
}
