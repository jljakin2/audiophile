// third-party
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// redux actions
import { handleAddToCartModal } from "../actions/visibleActions";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  border-left: 0.75rem solid ${({ theme }) => theme.orange};
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 5vh;
  right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000000;

  width: 14rem;
  height: 4rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    border-radius: 0 0 0.5rem 0.5rem;
    border-left: none;
    border-bottom: 0.5rem solid ${({ theme }) => theme.orange};

    justify-content: flex-start;
    top: 0;
    right: 0;

    width: 100%;
    padding-left: 1.5rem;
  }
`;
// ===== END OF STYLING =====

const AddToCartModal = () => {
  // dispatch instance to call redux actions later
  const dispatch = useDispatch();
  // get special state to show the added to cart alert
  const visible = useSelector(state => state.visible);
  const { showAddToCartModal } = visible;

  // once the component mounts, we want to wait 4 seconds and remove the alert from the screen
  useEffect(() => {
    setTimeout(() => {
      dispatch(handleAddToCartModal(showAddToCartModal));
    }, 3000);
  }, [dispatch, showAddToCartModal]);

  return <Container>Item added to cart</Container>;
};

export default AddToCartModal;
