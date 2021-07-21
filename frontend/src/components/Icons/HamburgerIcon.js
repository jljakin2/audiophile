// third-party
import React from "react";
import styled, { withTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// redux actions
import {
  handleDarkScreen,
  handleHamburgerMenu,
} from "../../actions/visibleActions";

// helpers
import theme from "../../theme/theme";

// ===== START OF STYLING =====
const StyledSvg = styled.svg`
  margin-right: 2rem;

  display: none;

  // 900px
  @media only screen and (max-width: 56.25em) {
    display: block;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    display: block;

    margin: 0;
  }
`;
// ===== END OF STYLING =====

const HamburgerIcon = () => {
  // dispatch instance to call redux actions later
  const dispatch = useDispatch();
  // get special state to show hamburger menu and darken the screen
  const visible = useSelector(state => state.visible);
  const { hamburgerMenu, darkScreen } = visible;

  // once the hamburger menu is clicked, we will toggle the hamburger menu and darken the screen
  const onHamburgerClick = () => {
    dispatch(handleHamburgerMenu(hamburgerMenu));
    dispatch(handleDarkScreen(darkScreen));
  };

  return (
    <StyledSvg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onHamburgerClick}>
      <g fill={hamburgerMenu ? theme.orange : "#FFF"} fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </StyledSvg>
  );
};

export default withTheme(HamburgerIcon);
