// third-party
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import Logo from "./Icons/Logo";
import FacebookIcon from "./Icons/FacebookIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import NavItems from "./NavItems";
import Text from "./Text";

// ===== START OF STYLING =====
const Container = styled.footer`
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 22.8125rem;
  padding: 4.6875rem 10.3125rem 0 10.3125rem;

  &::before {
    content: "";
    background: ${({ theme }) => theme.orange};

    position: absolute;
    top: 0;
    left: 10.3125rem;

    height: 4px;
    width: 6.25rem;

    // 900px
    @media only screen and (max-width: 56.25em) {
      left: 2.5rem;
    }

    // 450px
    @media only screen and (max-width: 28.125em) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 3.75rem 2.5rem 2.5rem 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    height: 100%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    align-items: center;
  }
`;

const NavContainer = styled.div`
  // 900px
  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
  }
`;

const Subtext = styled.p`
  opacity: 0.5;
  font-size: 1rem;
  line-height: 1.666666667;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  // 450px
  @media only screen and (max-width: 28.125em) {
    text-align: center;

    align-items: center;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding-right: 50%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 0;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  order: 1;

  margin-left: auto;

  & > * {
    cursor: pointer;

    & svg:hover path {
      fill: ${({ theme }) => theme.orange};
    }
  }

  & > *:not(:last-child) {
    margin-right: 1rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    align-self: center;

    margin: 0;
  }
`;
// ===== END OF STYLING =====

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <Link to="/">
          <Logo />
        </Link>
        <NavContainer>
          <NavItems type="footer" />
        </NavContainer>
      </TopContainer>
      <BottomContainer>
        <TextContainer>
          <Text
            type="body"
            content="Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week."
            opacity="0.5"
            mt="2.25rem"
            mb="3.5rem"
          />
        </TextContainer>
        <SocialIconContainer>
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com">
            <TwitterIcon />
          </a>
          <a href="https://instagram.com">
            <InstagramIcon />
          </a>
        </SocialIconContainer>
        <Subtext>Copyright 2021. All Rights Reserved</Subtext>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
