import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { nowTypeState, projectState } from '../../Data/atom';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 24px;
`;

const GridItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--accent-300);
    border-radius: 10px;
    padding: 2.5rem;
    img {
        flex-basis: 60%;
        width: 85%;
        min-height: 250px;
        max-height: 250px;
        border-radius: 10px;
    }
    .project_hover {
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.85);
        color: var(--white-100);
        border-radius: 10px;
        transition: 300ms all;
        a {
            font-size: 1.5rem;
            margin: 0.5rem;
            padding: 0.25rem;
            color: var(--accent-100);
            cursor: pointer;
            svg {
                transition: 300ms transform;
            }
            &:hover svg {
                transform: scale(1.15);
            }
        }
    }
    &:hover .project_hover {
        opacity: 1;
    }
`;

const GridDescription = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 2rem 0 2rem;
    border-top: 3px solid var(--white-200);
    h5 {
        font-size: 1.5rem;
        text-align: center;
        flex-basis: 40%;
    }
    p {
        margin: 1rem 0;
        line-height: 1.5;
        flex-basis: 50%;
    }
`;

const GridTag = styled.div`
    flex-basis: 10%;
    font-size: 0.75rem;
    color: var(--black-200);
`;

export default function ProjectGrid() {
    const project = useRecoilValue(projectState);
    const nowType = useRecoilValue(nowTypeState);

    return (
        <GridWrapper>
            {nowType !== 'all'
                ? project
                      .filter((a) => a.type === nowType)
                      .map((item) => {
                          return (
                              <GridItem key={item.id}>
                                  <img src={item.image_path} alt={item.title} />
                                  <GridDescription>
                                      <h5>{item.title}</h5>
                                      <p>{item.description}</p>
                                      <GridTag>#{item.tag}</GridTag>
                                  </GridDescription>
                                  <div className="project_hover">
                                      <div>
                                          <a
                                              href={item.url_path}
                                              target="blank"
                                          >
                                              <FaLocationArrow />
                                          </a>
                                          <a
                                              href={item.github_link}
                                              target="blank"
                                          >
                                              <FaGithub />
                                          </a>
                                      </div>
                                  </div>
                              </GridItem>
                          );
                      })
                : project.map((item) => {
                      return (
                          <GridItem key={item.id}>
                              <img src={item.image_path} alt={item.title} />
                              <GridDescription>
                                  <h5>{item.title}</h5>
                                  <p>{item.description}</p>
                                  <GridTag>#{item.tag}</GridTag>
                              </GridDescription>
                              <div className="project_hover">
                                  <div>
                                      <a href={item.url_path} target="blank">
                                          <FaLocationArrow />
                                      </a>
                                      <a href={item.github_link} target="blank">
                                          <FaGithub />
                                      </a>
                                  </div>
                              </div>
                          </GridItem>
                      );
                  })}
        </GridWrapper>
    );
}
