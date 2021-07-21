// third-party
import React from "react";
import styled, { withTheme } from "styled-components";

// components
import Text from "./Text";
import ButtonSolid from "./Buttons/ButtonSolid";

// helpers
import theme from "../theme/theme";

const circles =
  "https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013030/audiophileAssets/home/desktop/pattern-circles_wdwrio.svg";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.orange};
  background-image: url(${circles});
  background-position: -8rem -4rem;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 35.625rem;
  margin: 10.5rem 0 3rem 0;

  // 900px
  @media only screen and (max-width: 56.25em) {
    text-align: center;

    flex-direction: column;
    align-items: center;

    height: 100%;
    padding: 4rem 0;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    margin: 1.5rem 0 3rem 0;
  }
`;

const ImgContainer = styled.div`
  position: relative;

  width: 50%;
`;

const StyledImg = styled.img`
  position: absolute;
  bottom: -1rem;
  right: 1rem;

  height: 85%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    position: static;

    width: 50%;
    margin-bottom: 4.4375rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 70%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    align-items: center;
  }
`;
// ===== END OF STYLING =====

const MainFeaturedProduct = () => {
  return (
    <Container>
      <ImgContainer>
        <StyledImg
          src="https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013031/audiophileAssets/home/desktop/image-speaker-zx9_jjgzrw.png"
          alt="speaker"
        />
      </ImgContainer>
      <ContentContainer>
        <Content>
          <Text
            type="heading1"
            content="ZX9 Speaker"
            color={theme.white}
            mb="1.5rem"
          />
          <Text
            type="body"
            content="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            color={theme.white}
            opacity="0.75"
            mb="2.5rem"
          />
          <ButtonSolid
            type="link"
            route="/product/zx9-speaker"
            text="see product"
            bgColor={theme.black}
            hoverBgColor={theme.blackHover}
          />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default withTheme(MainFeaturedProduct);
