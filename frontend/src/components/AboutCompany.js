// third-party
import React from "react";
import styled from "styled-components";

// components
import Text from "./Text";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;

  height: 36.75rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    height: 43rem;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 50%;
  height: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    text-align: center;

    order: 1;
    align-items: center;

    width: 100%;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    justify-content: flex-start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 80%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 1.43px;
  line-height: 2.75rem;
  text-transform: uppercase;
  font-weight: 500;

  margin-bottom: 2rem;

  & span {
    color: ${({ theme }) => theme.orange};
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 1.75rem;
    letter-spacing: 1px;
  }
`;

const RightContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013264/audiophileAssets/shared/desktop/image-best-gear_mjs6yu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013273/audiophileAssets/shared/tablet/image-best-gear_hyydfm.jpg");
    background-position: center;

    width: 100%;
    margin-bottom: 3.9375rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013256/audiophileAssets/shared/mobile/image-best-gear_csykhh.jpg");

    height: 30rem;
    margin-bottom: 2.5rem;
  }
`;
// ===== END OF STYLING =====

const AboutCompany = ({ mt, mr, mb, ml }) => {
  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  return (
    <Container style={style}>
      <LeftContainer>
        <TextContainer>
          <Title>
            Bringing you the <span>best</span> audio gear
          </Title>
          <Text
            type="body"
            content="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
            opacity="0.5"
          />
        </TextContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default AboutCompany;
