// third-party
import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

// components
import CategoryCardSet from "../components/CategoryCardSet";
import AboutCompany from "../components/AboutCompany";
import FullProduct from "../components/FullProduct";
import BackButton from "../components/Buttons/BackButton";

// redux actions
import {
  handleCartPreview,
  handleLockBody,
  handleHamburgerMenu,
  handleDarkScreen,
} from "../actions/visibleActions";

// ===== START OF STYLING =====
const Container = styled.div`
  padding: 0 10.3125rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 0 2.5rem;
  }
`;
// ===== END OF STYLING =====

const ProductPage = props => {
  const { match, history } = props;

  // media query
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  // we need to listen for route changes so when the user navigates to a different page, all special views are reset to normal
  const dispatch = useDispatch();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      // send true to all actions because the actions are taking the opposite of their payload and we ultimately want them to be false when the route changes
      dispatch(handleHamburgerMenu(true));
      dispatch(handleCartPreview(true));
      dispatch(handleLockBody(true));
      dispatch(handleDarkScreen(true));
    });
    // when the component unmounts, we want to turn off all special states
    return () => {
      unlisten();
    };
  }, [history, dispatch]);

  return (
    <Container>
      <BackButton history={history} />
      <FullProduct
        match={match}
        mb={isMobile ? "5.5rem" : "10rem"}
        history={history}
      />
      <CategoryCardSet mb={isMobile ? "7.5rem" : "10rem"} />
      <AboutCompany mb={isMobile ? "7.5rem" : "10rem"} />
    </Container>
  );
};

export default ProductPage;
