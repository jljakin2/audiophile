// third-party
import React from "react";
import styled from "styled-components";

// components
import Text from "./Text";
import UpSellProductCard from "./UpSellProductCard";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
    align-items: center;
  }
`;
// ===== END OF STYLING =====

const UpSellProducts = props => {
  const { mt, mr, mb, ml, others } = props;

  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  const renderedUpSellCards =
    // check if the "others" field from the found product exists, and if it does, render the upsell product card
    others &&
    others.map(lineItem => {
      return <UpSellProductCard {...lineItem} />;
    });

  return (
    <Container style={style}>
      <Text type="heading3" content="You may also like" mb="4rem" />
      <ItemsContainer>{renderedUpSellCards}</ItemsContainer>
    </Container>
  );
};

export default UpSellProducts;
