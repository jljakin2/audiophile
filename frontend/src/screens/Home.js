// third-party
import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

// components
import HeroHeader from "../components/HeroHeader";
import CategoryCardSet from "../components/CategoryCardSet";
import MainFeaturedProduct from "../components/MainFeaturedProduct";
import SubFeaturedProducts from "../components/SubFeaturedProducts";
import AboutCompany from "../components/AboutCompany";

// redux actions
import {
  handleCartPreview,
  handleLockBody,
  handleHamburgerMenu,
  handleDarkScreen,
} from "../actions/visibleActions";

// ===== START OF STYLING =====
const Section = styled.section`
  padding: 0 10.3125rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 0 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    padding: 0 1.5rem;
  }
`;
// ===== END OF STYLING =====

const Home = ({ history }) => {
  // media query for mobile
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
    <>
      <HeroHeader />
      <Section>
        <CategoryCardSet mt={isMobile ? "6rem" : "12.5rem"} />
        <MainFeaturedProduct />
        <SubFeaturedProducts />
        <AboutCompany
          mt={isMobile ? "7.5rem" : "12.5rem"}
          mb={isMobile ? "7.5rem" : "12.5rem"}
        />
      </Section>
    </>
  );
};

export default Home;
