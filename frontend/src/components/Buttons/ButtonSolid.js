// third-party
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ===== START OF STYLING =====
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLinkButton = styled.div`
  background: ${props => props.bgColor};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;

  padding: 1rem 2rem;

  &:hover {
    background: ${props => props.hoverBgColor};
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 0.8125rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: ${props => props.bgColor};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  cursor: pointer;

  padding: 1rem 2rem;

  width: 100%;

  &:hover {
    background: ${props => props.hoverBgColor};
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 0.8125rem;
  }
`;
// ===== END OF STYLING =====

const ButtonSolid = ({ type, route, text, bgColor, hoverBgColor }) => {
  // check to see if the requested button is a link or a button. the main difference is that the link will require react-router link
  // and the button will be a submit button for a form
  if (type === "link") {
    return (
      <StyledLink to={route}>
        <StyledLinkButton bgColor={bgColor} hoverBgColor={hoverBgColor}>
          {text}
        </StyledLinkButton>
      </StyledLink>
    );
  } else if (type === "button") {
    return (
      <StyledButton bgColor={bgColor} hoverBgColor={hoverBgColor} type="submit">
        {text}
      </StyledButton>
    );
  } else {
    return;
  }
};

export default ButtonSolid;
