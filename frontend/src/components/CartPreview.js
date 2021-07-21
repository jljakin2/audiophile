// third-party
import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// components
import Text from "./Text";
import ButtonSolid from "./Buttons/ButtonSolid";
import CartPreviewItem from "./CartPreviewItem";

// redux actions
import { removeFromCart, removeAllItemsFromCart } from "../actions/cartActions";
import { handleCartPreview, handleLockBody } from "../actions/visibleActions";

// helpers
import { formatPrice } from "../helpers/helperFunctions";
import theme from "../theme/theme";

// ===== START OF STYLING =====
const BackgroundContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  display: none;

  width: 100vw;
  height: 100%;

  z-index: 5;
`;

const CartCardContainer = styled.div`
  background: white;
  border-radius: 0.5rem;

  display: flex;
  position: absolute;
  top: 2rem;
  right: 10rem;
  flex-direction: column;

  width: 23.5625rem;

  padding: 2rem;

  z-index: 10;

  // 900px
  @media only screen and (max-width: 56.25em) {
    right: 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    right: 1.25rem;

    width: 90%;
  }
`;

const EmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 2rem;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 1.5rem;
`;
// ===== END OF STYLING =====

const CartPreview = () => {
  // dispatch instance to use redux action later
  const dispatch = useDispatch();
  // get carItems from redux state
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  // get special state to show cart preview and lock the body
  const visible = useSelector(state => state.visible);
  const { showCart, lockBody } = visible;

  useEffect(() => {
    if (lockBody) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      // make sure we unlock the body when the component unmounts
      dispatch(handleLockBody(lockBody));
    };
  }, [dispatch, lockBody]);

  // helper functions and methods to get cost information
  const numOfCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const costForAllCartItems =
    cartItems < 1
      ? 0
      : cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const totalCost = formatPrice(costForAllCartItems);

  // handler functions
  const handleRemoveAllItems = () => {
    dispatch(removeAllItemsFromCart());
  };

  const handleRemoveSingleItem = itemSlug => {
    dispatch(removeFromCart(itemSlug));
  };

  const handleGoingToCheckout = () => {
    dispatch(handleCartPreview(showCart));
    dispatch(handleLockBody(lockBody));
  };

  return (
    <BackgroundContainer style={showCart ? { display: "block" } : {}}>
      <CartCardContainer>
        <Header>
          <Text type="heading6" content={`Cart (${numOfCartItems})`} />
          <div onClick={handleRemoveAllItems}>
            <Text type="removeAll" content="Remove all" />
          </div>
        </Header>
        {cartItems.length === 0 ? (
          <EmptyCartContainer>
            <Text type="body" content="Your cart is empty" opacity="0.5" />
          </EmptyCartContainer>
        ) : (
          <>
            {cartItems.map(item => {
              return (
                <CartPreviewItem
                  item={item}
                  handleRemoveSingleItem={handleRemoveSingleItem}
                />
              );
            })}
            <TotalContainer>
              <Text type="heading6" content="Total" opacity="0.5" />
              <Text type="heading6" content={`$ ${totalCost}`} />
            </TotalContainer>
            <div onClick={handleGoingToCheckout}>
              <ButtonSolid
                type="link"
                route="/checkout"
                text="checkout"
                bgColor={theme.orange}
                hoverBgColor={theme.lightOrange}
              />
            </div>
          </>
        )}
      </CartCardContainer>
    </BackgroundContainer>
  );
};

export default withTheme(CartPreview);
