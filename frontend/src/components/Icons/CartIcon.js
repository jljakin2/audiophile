// third-party
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// redux actions
import {
  handleCartPreview,
  handleLockBody,
} from "../../actions/visibleActions";

// ===== START OF STYLING =====
const MainContainer = styled.div`
  position: relative;
  cursor: pointer;

  // 900px
  @media only screen and (max-width: 56.25em) {
    margin-left: auto;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    margin: 0;
  }
`;

const CartItemCount = styled.div`
  background: ${({ theme }) => theme.orange};
  border-radius: 50%;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.white};

  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;
  padding: 0.5rem;
`;
// ===== END OF STYLING =====

const CartIcon = () => {
  // dispatch instance to call redux actions later
  const dispatch = useDispatch();
  // get special state to show the cart preview and lock the body
  const visible = useSelector(state => state.visible);
  const { showCart, lockBody } = visible;
  // get cart items from redux store
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // use reduce method to count all of the quantities
  const numOfCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  // conditional check to only show count alert if there are cart items
  const conditionalStyle = numOfCartItems === 0 ? { display: "none" } : {};

  const handleCartIconClick = () => {
    dispatch(handleCartPreview(showCart));
    dispatch(handleLockBody(lockBody));
  };

  return (
    <MainContainer onClick={handleCartIconClick}>
      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </svg>
      <CartItemCount style={conditionalStyle}>
        {numOfCartItems > 0 && numOfCartItems}
      </CartItemCount>
    </MainContainer>
  );
};

export default CartIcon;
