// third-party
import React from "react";
import styled from "styled-components";

// components
import ButtonShop from "./Buttons/ButtonShop";

// ===== START OF STYLING =====
const Card = styled.div`
  background: ${({ theme }) => theme.grey};
  border-radius: 0.5rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 21.875rem;
  height: 12.75rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    width: 13.9375rem;
    height: 10.3125rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 100%;
    margin-bottom: 6rem;
  }
`;

const Image = styled.img`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);

  width: 75%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    top: -40%;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 50%;
  }
`;

const CategoryTitle = styled.h5`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.black};
  letter-spacing: 1.29px;
  text-transform: uppercase;
  font-weight: 500;

  margin: 7.25rem 0 1.125rem 0;

  // 900px
  @media only screen and (max-width: 56.25em) {
    margin: 5rem 0 1.125rem 0;
  }
`;
// ===== END OF STYLING =====

const CategoryCard = ({ category, img }) => {
  return (
    <div>
      <Card>
        <Image src={img} alt={category} />
        <CategoryTitle>{category}</CategoryTitle>
        <ButtonShop route={`/category/${category}`} />
      </Card>
    </div>
  );
};

export default CategoryCard;
