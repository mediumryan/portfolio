import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { introCategoryState } from '../../Data/introAtom';

const IntroCategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    padding: 0.25rem;
    border: 0.5px solid var(--black-200);
    border-radius: 40px;
    button {
        width: 33%;
        color: var(--white-100);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 20px;
        margin: 0 0.25rem;
    }
`;

export default function IntroCategory() {
    const [introCategory, setIntroCategory] =
        useRecoilState(introCategoryState);

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
        <IntroCategoryWrapper>
            {introCategory.map((cat, catIndex) => {
                return (
                    <button
                        key={cat.id}
                        style={{
                            backgroundColor: cat.isActive
                                ? '#00619a'
                                : 'transparent',
                            color: cat.isActive ? '#fff' : '#999',
                        }}
                        onClick={() => {
                            handleCategory(catIndex);
                        }}
                    >
                        {cat.value}
                    </button>
                );
            })}
        </IntroCategoryWrapper>
    );
}
