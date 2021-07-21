// third-party
import React from "react";
import styled from "styled-components";

// ===== START OF STYLING =====
const HeaderContainer = styled.div`
  padding: 4.9375rem 0 3.5rem 0;
`;

const GoBackBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  line-height: 1.5625rem;

  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;
// ===== END OF STYLING =====

const BackButton = ({ history }) => {
  return (
    <HeaderContainer>
      <GoBackBtn onClick={history.goBack}>Go Back</GoBackBtn>
    </HeaderContainer>
  );
};

export default BackButton;
