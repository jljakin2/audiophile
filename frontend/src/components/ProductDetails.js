// third-party
import React from "react";
import styled, { withTheme } from "styled-components";

// components
import Text from "./Text";

// helpers
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;

  width: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

const FeaturesContainer = styled.div`
  width: 66%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    width: 100%;
    margin-bottom: 7.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    margin-bottom: 5.5rem;
  }
`;

const FeaturesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }
`;

const QuantityContainer = styled.div`
  width: 33%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: row;

    width: 100%;
  }
`;

const QuantityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: row;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
  }
`;

const NumbersContainer = styled.div`
  // 900px
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;

    margin-left: 10rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    margin: 0;
  }
`;

const ListContainer = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
// ===== END OF STYLING =====

const ProductDetails = ({ features, includes, mt, mr, mb, ml }) => {
  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  // check if the includes property from product object exists. this will avoid errors of undefined while api gets product info.
  // then render out each includes item with the quantity and what is included
  const renderedQuantities =
    includes &&
    includes.map((lineItem, index) => {
      const { quantity, item } = lineItem;

      return (
        <ListContainer key={index}>
          <Text
            type="body"
            content={`${quantity}x`}
            color={theme.orange}
            mr="1.5rem"
          />
          <Text type="body" content={item} opacity="0.5" />
        </ListContainer>
      );
    });

  return (
    <Container style={style}>
      <FeaturesContainer>
        <FeaturesContent>
          <Text type="heading3" content="Features" mb="2rem" />
          <Text type="body" content={features} opacity="0.5" />
        </FeaturesContent>
      </FeaturesContainer>
      <QuantityContainer>
        <QuantityContent>
          <Text type="heading3" content="In The Box" mb="2rem" />
          <NumbersContainer>{renderedQuantities}</NumbersContainer>
        </QuantityContent>
      </QuantityContainer>
    </Container>
  );
};

export default withTheme(ProductDetails);
