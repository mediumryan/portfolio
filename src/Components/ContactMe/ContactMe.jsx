import { styled } from 'styled-components';
// components
import { SectionWrapper } from '../Greeting/Greeting';
// icons
import { IoMdMail } from 'react-icons/io';
import { MdOutlineSmartphone } from 'react-icons/md';

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.75rem;
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
        font-size: 1.25rem;
        span {
            color: var(--accent-200);
            svg {
                width: 30px;
                height: 30px;
            }
        }
        span:first-child {
            margin-right: 0.5rem;
        }
    }
`;

export default function ContactMe() {
    return (
        <SectionWrapper>
            <ContactWrapper>
                <p>언제든 연락주세요</p>
                <ContactList>
                    <li>
                        <span>
                            <IoMdMail />
                        </span>
                        <span>straightwind0726@gamil.com</span>
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
