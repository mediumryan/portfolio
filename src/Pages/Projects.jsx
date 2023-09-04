import { styled } from 'styled-components';

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 48px;
`;

const ProjectTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: var(--primary-200);
    margin-bottom: 64px;
`;

export default function Projects() {
    // // 슬라이더
    // const offset = 6;
    // const maxPage = Math.floor(data?.results.length / offset) - 1;
    // const [sliderPage, setSliderPage] = useState(0);
    // const [back, setBack] = useState(false);
    // const [leaving, setLeaving] = useState(false);

    // const goNext = () => {
    //     if (leaving) {
    //         return;
    //     }
    //     setLeaving(true);
    //     setSliderPage((prev) => (prev === maxPage ? 0 : prev + 1));
    // };
    // const goPrev = () => {
    //     if (leaving) {
    //         return;
    //     }
    //     setLeaving(true);
    //     setSliderPage((prev) => (prev === 0 ? maxPage : prev - 1));
    // };

    return (
        <ProjectsWrapper>
            <ProjectTitle>Projects</ProjectTitle>
            {/* <>
                <SliderBox>
                    <h2>{sliderTitle}</h2>
                    <SliderBtns
                        goPrev={goPrev}
                        goNext={goNext}
                        setBack={setBack}
                        leaving={leaving}
                    />
                    <SliderRow
                        sliderTitle={sliderTitle}
                        back={back}
                        sliderPage={sliderPage}
                        data={data}
                        offset={offset}
                        mediaType={mediaType}
                        setLeaving={setLeaving}
                    />
                </SliderBox>
                <AnimatePresence>
                    {selectedMatch ? (
                        <SelectedItem
                            sliderTitle={sliderTitle}
                            selectedMatch={selectedMatch}
                            data={data}
                            mediaType={mediaType}
                        />
                    ) : null}
                </AnimatePresence>
                xw
            </> */}
        </ProjectsWrapper>
    );
}
