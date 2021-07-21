// third-party
import React from "react";
import styled, { withTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

// components
import Text from "./Text";
import ButtonSolid from "./Buttons/ButtonSolid";

// helpers
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;

  height: 35rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;

    height: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 50%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    order: -1;

    width: 100%;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;

  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;
  height: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    justify-content: stretch;

    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 85%;
  height: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    text-align: center;

    align-items: center;
    justify-content: flex-start;

    width: 100%;
    margin-top: 2rem;
  }
`;
// ===== END OF STYLING =====

const SingleProduct = props => {
  // destructure props
  const { index, slug, name, description, image, id, mt, mr, mb, ml } = props;

  // media query
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  // conditional check to see if the product preview is in the even spot or the first one, then we will shift the image and content compared to the odd index ones
  const orderCheck = index ? index % 2 === 0 || index === 0 : true;

  // inline styling
  const contentContainerStyle = isMobile
    ? {}
    : { justifyContent: "flex-start" };
  const imgStyle = isMobile ? {} : { order: "-1" };
  const mainContainerStyle = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  return (
    <Container key={id} style={mainContainerStyle}>
      <ContentContainer style={orderCheck ? {} : contentContainerStyle}>
        <TextContainer>
          {props.new && (
            <Text
              type="overline"
              content="New Product"
              color={theme.orange}
              mb="1rem"
            />
          )}
          <Text type="heading2" content={name} mb="2rem" />
          <Text type="body" content={description} opacity="0.5" mb="2.5rem" />
          <ButtonSolid
            type="link"
            route={`/product/${slug}`}
            text="See Product"
            bgColor={theme.orange}
            hoverBgColor={theme.lightOrange}
          />
        </TextContainer>
      </ContentContainer>
      <ImgContainer style={orderCheck ? imgStyle : {}}>
        <StyledImg src={image.desktop} alt={slug} />
      </ImgContainer>
    </Container>
  );
};

export default withTheme(SingleProduct);
