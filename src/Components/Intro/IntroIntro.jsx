import { styled } from 'styled-components';

export const IntroContentWrapper = styled.div`
    padding: 1rem 2rem;
    width: 100%;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0;
    }
`;

const IntroParagraph = styled.p`
    line-height: 1.5;
`;

export default function IntroIntro() {
    return (
        <IntroContentWrapper>
            <IntroParagraph>
                "これまで独学でウェブ開発を勉強してきました。これからはチームの一員として多くのことを見て学び、より良い開発者になりたいです。私は止まらない情熱で、
                '昨日よりも良い自分' になるために着実に勉強し、努力します。"
                <br />
                <br />
                ｢現在、ReactとTypeScriptに興味があります。必要であれば他の言語についても学ぶ覚悟があります。｣
            </IntroParagraph>
        </IntroContentWrapper>
    );
}
