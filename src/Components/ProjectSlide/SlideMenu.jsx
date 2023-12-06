import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { nowTypeState, projectTypeState } from '../../Data/atom';

const SliderMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 3rem 0;
    button {
        margin-right: 1rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
    }
`;

const NowHere = styled(motion.div)`
    width: 100%;
    height: 2px;
    background-color: var(--accent-200);
`;

export default function SlideMenu() {
    const [projectType, setProjectType] = useRecoilState(projectTypeState);
    const setNowType = useSetRecoilState(nowTypeState);

    const handleMenu = (item, index) => {
        const copy = [...projectType];
        const updatedType = copy.map((type) => ({
            ...type,
            state: false,
        }));
        updatedType[index].state = true;
        setProjectType(updatedType);
        setNowType(item.type);
    };

    return (
        <SliderMenuWrapper>
            {projectType.map((item, index) => {
                return (
                    <AnimatePresence key={item.id}>
                        <button
                            onClick={() => {
                                handleMenu(item, index);
                            }}
                        >
                            {item.value}
                            {item.state && <NowHere layoutId="now_here" />}
                        </button>
                    </AnimatePresence>
                );
            })}
        </SliderMenuWrapper>
    );
}
