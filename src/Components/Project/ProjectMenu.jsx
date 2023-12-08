import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { nowTypeState, projectTypeState } from '../../Data/atom';

const ProjectMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
    padding: 0.25rem;
    border: 0.5px solid var(--black-200);
    border-radius: 40px;
    button {
        width: 33%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 20px;
        margin: 0 0.25rem;
        transition: 300ms all;
    }
`;

export default function ProjectMenu() {
    const [type, setType] = useRecoilState(projectTypeState);
    const setNowType = useSetRecoilState(nowTypeState);

    const handleMenu = (item, index) => {
        const updatedType = type.map((t) => {
            return { ...t, state: false };
        });
        updatedType[index].state = true;
        setType(updatedType);
        setNowType(item.type);
    };

    console.log(type);

    return (
        <ProjectMenuWrapper>
            {type.map((item, index) => {
                return (
                    <button
                        key={item.id}
                        style={{
                            backgroundColor: item.state
                                ? '#00619a'
                                : 'transparent',
                            color: item.state ? '#fff' : '#000',
                        }}
                        onClick={() => {
                            handleMenu(item, index);
                        }}
                    >
                        {item.value}
                    </button>
                );
            })}
        </ProjectMenuWrapper>
    );
}
