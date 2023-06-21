import React from "react";
// import styled-components
import {
  ContactContainer,
  EmailTel,
} from "../styled/styled-contact/StyledContact";
import { SocialContainer } from "../styled/styled-contact/StyledSocial";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <h3>
        Contact.
        <hr />
      </h3>
      <p>Please, Contact Me.</p>
      <EmailTel>
        <p>
          <span>E-mail :</span>
          <span>straightwind0726@gmail.com</span>
        </p>
        <p>
          <span>Tel :</span>
          <span>080-7361-1518</span>
        </p>
      </EmailTel>
      <SocialContainer>
        <a href="https://medium-ryan.tistory.com" target="blank">
          <span>BLOG</span>
        </a>
        <a href="https://github.com/mediumryan" target="blank">
          <i className="fab fa-github"></i>
        </a>
      </SocialContainer>
    </ContactContainer>
  );
}
