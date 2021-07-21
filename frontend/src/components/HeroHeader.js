// third-party
import React from "react";
import styled, { withTheme } from "styled-components";

// components
import ButtonSolid from "./Buttons/ButtonSolid";
import Text from "./Text";

// helpers
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Container = styled.div`
  background-color: ${({ theme }) => theme.almostBlack};
  background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013031/audiophileAssets/home/desktop/image-hero_u3m584.jpg");
  background-size: 80% auto;
  background-position: bottom 0% right 10%;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 70vh;
  padding: 0 10.3125rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    background-image: none;

    align-items: center;

    height: 60vh;
    padding: 0 11.0625rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    height: 80vh;
    padding: 0 1.5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 35%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    align-items: center;
    text-align: center;

    width: 90%;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
  }
`;
// ===== END OF STYLING =====

const HeroHeader = () => {
  return (
    <Container>
      <ContentContainer>
        <Text
          type="overline"
          content="New Product"
          color={theme.orange}
          mb="1.625rem"
        />
        <Text
          type="heading1"
          content="XX99 Mark II Headphones"
          color={theme.white}
          mb="1.5rem"
        />
        <Text
          type="body"
          content="Experience natural, life like audio and exceptional build quality made
          for the passionate music enthusiast."
          opacity="0.75"
          mb="2.5rem"
        />
        <ButtonSolid
          type="link"
          text="See Product"
          route="/product/xx99-mark-two-headphones"
          bgColor={theme.orange}
          hoverBgColor={theme.lightOrange}
        />
      </ContentContainer>
    </Container>
  );
};

export default withTheme(HeroHeader);
