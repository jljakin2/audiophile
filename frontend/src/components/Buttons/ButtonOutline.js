// third-party
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ===== START OF STYLING =====
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.black};
  font-size: 0.8125rem;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.black};
  letter-spacing: 1px;
  cursor: pointer;

  padding: 1rem 2rem;

  &:hover {
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`;
// ===== END OF STYLING =====

const ButtonOutline = ({ route, text }) => {
  return (
    <StyledLink to={route}>
      <StyledButton>{text}</StyledButton>
    </StyledLink>
  );
};

export default ButtonOutline;
