import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { nowTypeState, projectTypeState } from '../../Data/atom';
import { AnimatePresence } from 'framer-motion';

const ProjectMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    padding: 0.25rem;
    border: 0.5px solid var(--black-200);
    border-radius: 40px;
    button {
        width: 33%;
        color: var(--white-200);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 20px;
        margin: 0 0.25rem;
    }
`;

export default function ProjectMenu() {
    const [type, setType] = useRecoilState(projectTypeState);
    const [nowType, setNowType] = useRecoilState(nowTypeState);

    const handleMenu = (item, index) => {
        const copy = [...type];
        const updatedType = copy.map((type) => ({
            ...type,
            state: false,
        }));
        updatedType[index].state = true;
        setType(updatedType);
        setNowType(item.type);
    };

    return (
        <ProjectMenuWrapper>
            {type.map((item, index) => {
                return (
                    <AnimatePresence key={item.id}>
                        <button
                            onClick={() => {
                                handleMenu(item, index);
                            }}
                            style={{
                                backgroundColor:
                                    item.type === nowType ? '#00619a' : 'none',
                            }}
                        >
                            {item.value}
                        </button>
                    </AnimatePresence>
                );
            })}
        </ProjectMenuWrapper>
    );
}
