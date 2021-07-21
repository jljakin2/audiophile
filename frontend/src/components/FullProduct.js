// third-party
import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

// components
import Text from "./Text";
import ButtonSolid from "./Buttons/ButtonSolid";
import ProductDetails from "../components/ProductDetails";
import ProductGallery from "../components/ProductGallery";
import UpSellProducts from "../components/UpSellProducts";

// redux actions
import { listProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { handleAddToCartModal } from "../actions/visibleActions";

// helpers
import { formatPrice } from "../helpers/helperFunctions";
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;

  height: 35rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;

    height: 100%;
  }
`;

const ImgContainer = styled.div`
  order: -1;

  width: 50%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;

  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;
  height: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    margin-top: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 85%;
  height: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
  }
`;

const StyledForm = styled.div`
  display: flex;
`;

const CounterContainer = styled.div`
  background: ${({ theme }) => theme.lightGrey};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 7.5rem;
  height: 3rem;
  margin-right: 1rem;
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
// ===== END OF STYLING =====

const FullProduct = props => {
  // destructure props
  const { history, match, mt, mr, mb, ml } = props;

  // local state to track quantity
  const [qty, setQty] = useState(1);

  // media query for mobile
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  // inline styling
  const mainContainerStyle = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  // dispatch instance to call redux actions
  const dispatch = useDispatch();
  // grab product info from redux store
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  // grab special state info to show the "item added to cart" alert
  const visible = useSelector(state => state.visible);
  const { showAddToCartModal } = visible;

  useEffect(() => {
    // use the redux action to call the api to get the product info based on the product slug from the parameter
    dispatch(listProductDetails(match.params.slug));
  }, [dispatch, match]);

  const { name, description, slug, image, price } = product;

  const handleAddToCart = () => {
    // add the items to cart
    dispatch(addToCart(slug, qty));
    // show the added to cart alert to let user know something happened
    dispatch(handleAddToCartModal(showAddToCartModal));
  };

  // we need to listen for route changes so when the user navigates to a different page, all special views are reset to normal
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      setQty(1);
    });
    return () => {
      // when the component unmounts, we want to turn off all special states
      unlisten();
    };
  }, [history]);

  return loading ? (
    "loading"
  ) : error ? (
    "error"
  ) : (
    <>
      <Container style={mainContainerStyle}>
        <ContentContainer>
          <TextContainer>
            {product.new && (
              <Text
                type="overline"
                content="New Product"
                color={theme.orange}
                mb="1rem"
              />
            )}
            <Text type="heading2" content={name} mb="2rem" />
            <Text type="body" content={description} opacity="0.5" mb="2.5rem" />

            <Text
              type="heading6"
              content={`$ ${formatPrice(price)}`}
              mb="3rem"
            />

            <StyledForm>
              <CounterContainer>
                <CounterButton
                  onClick={() => (qty === 1 ? setQty(1) : setQty(qty - 1))}>
                  -
                </CounterButton>
                <Text type="body" content={qty} />
                <CounterButton onClick={() => setQty(qty + 1)}>+</CounterButton>
              </CounterContainer>
              <div onClick={handleAddToCart}>
                <ButtonSolid
                  type="button"
                  text="Add to Cart"
                  bgColor={theme.orange}
                  hoverBgColor={theme.lightOrange}
                />
              </div>
            </StyledForm>
          </TextContainer>
        </ContentContainer>
        <ImgContainer>
          <StyledImg src={image && image.desktop} alt={slug} />
        </ImgContainer>
      </Container>
      <ProductDetails {...product} mb={isMobile ? "5.5rem" : "10rem"} />
      <ProductGallery {...product} mb={isMobile ? "7.5rem" : "10rem"} />
      <UpSellProducts {...product} mb={isMobile ? "7.5rem" : "15rem"} />
    </>
  );
};

export default withTheme(FullProduct);
