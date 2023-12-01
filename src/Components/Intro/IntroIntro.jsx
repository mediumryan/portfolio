import { styled } from 'styled-components';

export const IntroContentWrapper = styled.div`
    padding: 1rem 2rem;
    width: 100%;
`;

const IntroParagraph = styled.p`
    line-height: 1.5;
`;

export default function IntroIntro() {
    return (
        <IntroContentWrapper>
            <IntroParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                optio nihil ab nobis aspernatur eius vitae minus architecto
                possimus veritatis, odit asperiores voluptates neque modi
                assumenda voluptatem similique quidem saepe?
            </IntroParagraph>
        </IntroContentWrapper>
    );
}
