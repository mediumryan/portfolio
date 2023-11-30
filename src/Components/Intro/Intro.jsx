import { styled } from 'styled-components';
import { SectionWrapper } from '../Greeting/Greeting';
// image
import avatar_upper from './../../images/avatar_upper.jpeg';
import { useState } from 'react';

const IntroInner = styled.div`
    margin: 2.5rem 0;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Rampart One', sans-serif;
`;

const IntroContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
`;

const IntroLeft = styled.div`
    flex-basis: 50%;
    img {
        width: 325px;
        height: 325px;
    }
`;

const IntroRight = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IntroCategory = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0.25rem;
    border: 0.5px solid var(--black-200);
    border-radius: 40px;
    button {
        color: var(--white-100);
        padding: 0.5rem 5rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 20px;
        margin: 0 0.25rem;
    }
`;

const IntroIntro = styled.p`
    line-height: 1.5;
`;

export default function Intro() {
    const [introCategory, setIntroCategory] = useState([
        {
            id: 'intro_0',
            value: '自己紹介',
            isActive: true,
        },
        {
            id: 'intro_1',
            value: '経歴',
            isActive: false,
        },
        {
            id: 'intro_2',
            value: 'スキル',
            isActive: false,
        },
    ]);

    const handleCategory = (catIndex) => {
        setIntroCategory((prevCat) => {
            const newCat = prevCat.map((cat) => {
                return { ...cat, isActive: false };
            });
            newCat[catIndex].isActive = true;
            return newCat;
        });
    };

    return (
        <SectionWrapper>
            <IntroInner>
                <SectionTitle>私を紹介します</SectionTitle>
                <IntroContent>
                    <IntroLeft>
                        <img src={avatar_upper} alt="avatar upper body" />
                    </IntroLeft>
                    <IntroRight>
                        <IntroCategory>
                            {introCategory.map((cat, catIndex) => {
                                return (
                                    <button
                                        key={cat.id}
                                        style={{
                                            backgroundColor: cat.isActive
                                                ? '#00619a'
                                                : 'transparent',
                                            color: cat.isActive
                                                ? '#fff'
                                                : '#999',
                                        }}
                                        onClick={() => {
                                            handleCategory(catIndex);
                                        }}
                                    >
                                        {cat.value}
                                    </button>
                                );
                            })}
                        </IntroCategory>
                        <IntroIntro
                            style={{
                                display: introCategory[0].isActive
                                    ? 'block'
                                    : 'none',
                            }}
                        >
                            새로운 기술에 대한 호기심과 끊임없는 열정을 가지고
                            있습니다. 학습한 지식을 직접 구현한 블로그에
                            정리하고 공유함으로써 지식 공유에도 기여하고
                            있습니다. 소통과 협업도 중요시합니다. 다양한
                            프로젝트 경험을 통해 프론트엔드와 백엔드
                            개발자들과의 원활한 협업 방법과 개발 프로세스를
                            익혀왔습니다. 팀 내에서 효과적인 커뮤니케이션과 역할
                            분담을 통해 일정 관리와 목표 달성을 위한 체계적인
                            계획 수립 능력을 갖추고 있습니다. 이러한 노력으로
                            프로젝트의 완성도가 높은 팀으로 평가받은 경험이
                            있습니다.
                        </IntroIntro>
                    </IntroRight>
                </IntroContent>
            </IntroInner>
        </SectionWrapper>
    );
}
