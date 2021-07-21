// third-party
import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// components
import CheckMark from "./Icons/CheckMark";
import Text from "./Text";
import ButtonSolid from "./Buttons/ButtonSolid";
import CheckoutCartItem from "./CheckoutCartItem";

// redux actions
import { handleOrderModal, handleLockBody } from "../actions/visibleActions";

// helpers
import { formatCheckoutPrice } from "../helpers/helperFunctions";
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 10000;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  width: 33.75rem;
  height: 35rem;
  padding: 3rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 90%;
    height: 90%;
    padding: 2rem;
  }
`;

const OrderSummaryContainer = styled.div`
  background: ${({ theme }) => theme.grey};
  border-radius: 0.5rem;

  display: flex;

  width: 100%;
  min-height: auto;
  margin-bottom: 2.875rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
  }
`;

const ItemsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  width: 50%;
  margin: 1.5rem 1.5rem 0 1.5rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
`;

const ItemsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
`;

const TotalContainer = styled.div`
  background: ${({ theme }) => theme.black};
  border-radius: 0 0.5rem 0.5rem 0;
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 50%;
  padding: 0 0 2rem 2rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

const SeeMoreContainer = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;

  margin: 0.5rem 0;
`;
// ===== END OF STYLING =====

const OrderModal = () => {
  // state to let user decide if they want to see more items in their order summary if they have more than 1 item in their order
  const [seeMore, setSeeMore] = useState(false);

  // get current state with order info
  const order = useSelector(state => state.order);

  const grandTotal =
    order.payload && formatCheckoutPrice(order.payload.grandTotal);

  // dispatch instance to call redux actions later
  const dispatch = useDispatch();

  // grab special states from redux to show modal and lock body
  const visible = useSelector(state => state.visible);
  const { showModal, lockBody } = visible;

  const handleNavigateAwayFromModal = () => {
    /**
     * Remove the special states when the user navigates away from order modal
     */
    dispatch(handleOrderModal(showModal));
    dispatch(handleLockBody(lockBody));
  };

  useEffect(() => {
    // allows us to lock body
    if (lockBody) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      // when this component unmounts, the body is unlocked
      dispatch(handleLockBody(lockBody));
    };
  }, [dispatch, lockBody]);

  return (
    <Background>
      <Container>
        {order.payload ? (
          <>
            <CheckMark />
            <Text
              type="heading3"
              content="Thank you for your order"
              mt="2rem"
              mb="1.5rem"
            />
            <Text
              type="body"
              content="You will receive an email confirmation shortly"
              opacity="0.5"
              mb="2rem"
            />
            <OrderSummaryContainer>
              <ItemsPreviewContainer>
                <ItemsContainer>
                  {order.payload && seeMore ? (
                    order.payload.orderItems.map(item => {
                      return (
                        <CheckoutCartItem item={item} mb="0.5rem" mr="1rem" />
                      );
                    })
                  ) : (
                    <CheckoutCartItem
                      item={order.payload.orderItems[0]}
                      mb="0.5rem"
                      mr="1rem"
                    />
                  )}
                </ItemsContainer>

                <SeeMoreContainer onClick={() => setSeeMore(!seeMore)}>
                  <Text
                    type="body"
                    content={
                      order.payload.orderItems.length > 1
                        ? seeMore
                          ? "Show less"
                          : `and ${order.payload.orderItems.length} other item(s)`
                        : ""
                    }
                    opacity="0.5"
                  />
                </SeeMoreContainer>
              </ItemsPreviewContainer>
              <TotalContainer>
                <Text
                  type="cartBody"
                  content="Grand Total"
                  opacity="0.5"
                  color={theme.white}
                  mb="0.5rem"
                />
                {grandTotal}
              </TotalContainer>
            </OrderSummaryContainer>
            <div onClick={handleNavigateAwayFromModal}>
              <ButtonSolid
                type="link"
                text="Back to home"
                route="/"
                bgColor={theme.orange}
                hoverBgColor={theme.lightOrange}
              />
            </div>
          </>
        ) : (
          "loading"
        )}
      </Container>
    </Background>
  );
};

export default withTheme(OrderModal);
