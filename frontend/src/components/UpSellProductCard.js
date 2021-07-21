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
  flex-direction: column;
  align-items: center;
  width: 21.875rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    width: 13.9375rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    margin-bottom: 3.5rem;
  }
`;

const ImgContainer = styled.div`
  background: ${({ theme }) => theme.grey};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  & img {
    object-fit: cover;
    width: 95%;
  }
`;
// ===== END OF STYLING =====

const UpSellProductCard = props => {
  // pull out the relevant data from the found product
  const {
    slug,
    name,
    image: { mobile, desktop },
  } = props;

  // media query for mobile
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  return (
    <Container>
      <ImgContainer>
        <img src={isMobile ? mobile : desktop} alt="slug" />
      </ImgContainer>
      <Text type="heading5" content={name} mb="2rem" />
      <ButtonSolid
        type="link"
        route={`/product/${slug}`}
        text="See Product"
        bgColor={theme.orange}
        hoverBgColor={theme.lightOrange}
      />
    </Container>
  );
};

export default withTheme(UpSellProductCard);
