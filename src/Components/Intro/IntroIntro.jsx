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
                "지금까지 독학으로 웹개발 공부를 해왔습니다. 앞으로는 팀의
                일원이 되어 더욱 많은 것들을 보고 배워 더 나은 개발자가
                되고싶습니다. 저는 식지 않는 열정으로 '어제보다 더 나은 자신'이
                되기 위해 꾸준히 공부하고 노력할 것입니다."
                <br />
                <br />
                [현재 저는 React와 TypeScript에 대해 관심이 많습니다. 필요하다면
                다른 언어에 대한 공부도 할 것입니다.]
            </IntroParagraph>
        </IntroContentWrapper>
    );
}
