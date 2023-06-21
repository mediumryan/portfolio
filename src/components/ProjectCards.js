import React from "react";
// import styled-components
import {
  Cards,
  CardsContent,
} from "../styled/styled-project/StyledProjectsCards";

export default function ProjectCards({ item }) {
  return (
    <Cards>
      <img alt={item.title} src={item.image_path} />
      <CardsContent href={item.url_path} target="blank">
        <div className="work-content">{item.title}</div>
      </CardsContent>
    </Cards>
  );
}
