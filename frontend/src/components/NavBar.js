// third-party
import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

// components
import Logo from "./Icons/Logo";
import NavItems from "./NavItems";
import CartIcon from "./Icons/CartIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";
import CategoryCardSet from "./CategoryCardSet";

// helpers
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Container = styled.div`
  position: relative;

  width: 100%;
  height: 6.0625rem;
  padding: 0 10.3125rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 0 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    padding: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    justify-content: flex-start;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    justify-content: space-around;
  }
`;

const HamburgerContainer = styled.div`
  background: ${({ theme }) => theme.white};

  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 1000;

  width: 100%;
  padding: 6rem 2rem 2rem 2rem;
`;
// ===== END OF STYLING =====

const NavBar = () => {
  // media query that looks to differentiate desktop vs table/mobile in order to show/hide hamburger in navbar
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 900px)",
  });

  // we want to know the pathname so we can automatically adjust the size, color, and styling of the navbar
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const numOfPaths = usePathname().split("/").length;
  const backgroundStyle = {
    background: `${numOfPaths <= 2 ? theme.almostBlack : theme.black}`,
  };
  const borderStyle = {
    borderBottom: `${
      numOfPaths <= 4 ? "1px solid rgba(255,255,255,.2)" : "none"
    }`,
  };

  // get special state from redux to show hamburgerMenu when responsive design allows it
  const visible = useSelector(state => state.visible);
  const { hamburgerMenu } = visible;

  return (
    <Container style={backgroundStyle}>
      {hamburgerMenu && (
        <HamburgerContainer>
          <CategoryCardSet mobileMenu={true} />
        </HamburgerContainer>
      )}
      <ContentContainer style={borderStyle}>
        {/* conditional check in order to make sure navbar is centered in mobile but has proper spacing in all other sizes */}
        {isNotDesktop ? (
          <>
            <HamburgerIcon />
            <Link to="/">
              <Logo />
            </Link>
          </>
        ) : (
          <div>
            <HamburgerIcon />
            <Link to="/">
              <Logo />
            </Link>
          </div>
        )}
        {/* end of conditional check */}

        <NavItems type={"nav"} />
        <CartIcon />
      </ContentContainer>
    </Container>
  );
};

export default withTheme(NavBar);
