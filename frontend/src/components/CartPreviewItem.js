// third-party
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// components
import Text from "./Text";

// redux actions
import { updateCart } from "../actions/cartActions";
import { getShortenedName } from "../helpers/helperFunctions";

// ===== START OF STYLING =====
const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;
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

const CounterContainer = styled.div`
  background: ${({ theme }) => theme.lightGrey};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 6rem;
  height: 2rem;
  margin-left: auto;
  padding: 1rem;

  & p {
    cursor: default;
  }
`;

const CounterButton = styled.div`
  cursor: pointer;
  &::selection {
    background: transparent;
  }

  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;

const RemoveBtn = styled.p`
  cursor: pointer;
  opacity: 0.5;

  margin-right: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;
// ===== END OF STYLING =====

const CartPreviewItem = ({ item, handleRemoveSingleItem }) => {
  // dispatch instance to call redux action later
  const dispatch = useDispatch();

  // when the quantity is reduced. the third argument in the action call is to tell the reducer to run through the process where it checks to make sure the quantity is never less than 1
  const handleCartReduceQty = () => {
    dispatch(updateCart(item.slug, item.qty, true));
  };

  const handleCartAddQty = () => {
    dispatch(updateCart(item.slug, item.qty));
  };

  return (
    <div>
      <ItemContainer>
        <RemoveBtn onClick={() => handleRemoveSingleItem(item.slug)}>
          x
        </RemoveBtn>
        <CartImg src={item.image} alt={item.slug} />
        <ProductInfoContainer>
          <Text type="cartBody" content={getShortenedName(item.name)} />
          <Text type="body" content={`$ ${item.price}`} opacity="0.5" />
        </ProductInfoContainer>
        <CounterContainer>
          <CounterButton onClick={handleCartReduceQty}>-</CounterButton>
          <Text type="body" content={item.qty} />
          <CounterButton onClick={handleCartAddQty}>+</CounterButton>
        </CounterContainer>
      </ItemContainer>
    </div>
  );
};

export default CartPreviewItem;
