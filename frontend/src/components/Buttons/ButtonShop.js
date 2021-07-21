// third-party
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import ArrowIcon from "../Icons/ArrowIcon";

// ===== START OF STYLING =====
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const Text = styled.p`
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 0.8125rem;
  color: #000000;
  letter-spacing: 1px;

  margin-right: 0.75rem;
`;
// ===== END OF STYLING =====

const ButtonShop = ({ route }) => {
  return (
    <StyledLink to={route}>
      <Container>
        <Text>Shop</Text>
        <ArrowIcon />
      </Container>
    </StyledLink>
  );
};

export default ButtonShop;
