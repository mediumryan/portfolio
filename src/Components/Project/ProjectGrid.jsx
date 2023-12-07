import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { nowTypeState, projectState } from '../../Data/atom';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

const GridItem = styled.div`
    img {
        width: 100%;
    }
`;

const GridDescription = styled.div``;

const GridTag = styled.div``;

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
                                  <div className="slide_hover">
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
                              <div className="slide_hover">
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
