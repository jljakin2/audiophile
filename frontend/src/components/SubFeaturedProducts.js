// third-party
import React from "react";
import styled from "styled-components";

// components
import Text from "./Text";
import ButtonOutline from "./Buttons/ButtonOutline";

// ===== START OF STYLING =====
const Container = styled.div`
  display: grid;
  grid-template:
    "long-view long-view" 1fr
    "product-image short-view" 1fr
    / 1fr 1fr;
  grid-gap: 3rem 1.875rem;

  height: 43rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

const LongView = styled.div`
  background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013031/audiophileAssets/home/desktop/image-speaker-zx7_vik7yd.jpg");
  border-radius: 0.5rem;

  grid-area: long-view;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 5.9375rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    background-position: center;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013022/audiophileAssets/home/mobile/image-speaker-zx7_ltn4ib.jpg");
    background-size: cover;

    height: 20rem;
    padding: 0 1.5rem;
  }
`;

const ProductImg = styled.div`
  background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013031/audiophileAssets/home/desktop/image-earphones-yx1_qgpkga.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;

  grid-area: product-image;

  // 900px
  @media only screen and (max-width: 56.25em) {
    background-position: center;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    background-image: url("https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013022/audiophileAssets/home/mobile/image-earphones-yx1_pwup96.jpg");

    height: 12.5rem;
  }
`;

const ShortView = styled.div`
  background: ${({ theme }) => theme.grey};
  border-radius: 0.5rem;

  grid-area: short-view;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 5.9375rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    height: 12.5rem;
    padding: 0 1.5rem;
  }
`;
// ===== END OF STYLING =====

const SubFeaturedProducts = () => {
  return (
    <Container>
      <LongView>
        <Text type="heading4" content="ZX7 SPEAKER" mb="2.25rem" />
        <ButtonOutline route="/product/zx7-speaker" text="See Product" />
      </LongView>
      <ProductImg />
      <ShortView>
        <Text type="heading4" content="YX1 EARPHONES" mb="2.25rem" />
        <ButtonOutline route="/product/yx1-earphones" text="See Product" />
      </ShortView>
    </Container>
  );
};

export default SubFeaturedProducts;
