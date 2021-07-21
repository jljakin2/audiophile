// third-party
import React from "react";
import styled from "styled-components";

// components
import Text from "./Text";

// helpers
import { getShortenedName } from "../helpers/helperFunctions";

// ===== START OF STYLING =====
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartImg = styled.img`
  border-radius: 0.5rem;

  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Quantity = styled.p`
  opacity: 0.5;
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
  letter-spacing: 0;
  line-height: 25px;

  margin-left: auto;
`;
// ===== END OF STYLING =====

const CheckoutCartItem = ({ item, mb, mt, mr, ml }) => {
  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  return (
    <ItemContainer style={style}>
      <CartImg src={item.image} alt={item.slug} />
      <ProductInfoContainer>
        <Text type="cartBody" content={getShortenedName(item.name)} />
        <Text type="body" content={`$ ${item.price}`} opacity="0.5" />
      </ProductInfoContainer>
      <Quantity>{item.qty}x</Quantity>
    </ItemContainer>
  );
};

export default CheckoutCartItem;
