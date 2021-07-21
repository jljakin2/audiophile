// third-party
import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

// components
import Text from "../components/Text";
import ListOfProducts from "../components/ListOfProducts";
import CategoryCardSet from "../components/CategoryCardSet";
import AboutCompany from "../components/AboutCompany";

// redux actions
import {
  handleCartPreview,
  handleLockBody,
  handleHamburgerMenu,
  handleDarkScreen,
} from "../actions/visibleActions";

// helpers
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Header = styled.section`
  background: ${({ theme }) => theme.black};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 14.9375rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    height: 6rem;
  }
`;

const PageContainer = styled.section`
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

const CategoryPage = props => {
  // bring in match from props in order to set the title of the page
  const { match, history } = props;

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
    // when component unmounts, we want to reset all special states
    return () => {
      unlisten();
    };
  }, [history, dispatch]);

  return (
    <>
      <Header>
        <Text
          type="heading2"
          content={match.params.category}
          color={theme.white}
        />
      </Header>
      <PageContainer>
        <ListOfProducts
          mt={isMobile ? "4rem" : "10rem"}
          mb={isMobile ? "12rem" : "15rem"}
          match={match}
        />
        <CategoryCardSet />
        <AboutCompany
          mt={isMobile ? "5rem" : "10rem"}
          mb={isMobile ? "7.5rem" : "10rem"}
        />
      </PageContainer>
    </>
  );
};

export default withTheme(CategoryPage);
