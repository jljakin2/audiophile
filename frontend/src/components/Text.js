// third-party
import React from "react";
import styled from "styled-components";

// ===== START OF STYLING =====
const Heading1 = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 2px;
  line-height: 3.625rem;
  text-transform: uppercase;
  font-weight: 500;

  // 450px
  @media only screen and (max-width: 28.125em) {
    line-height: 2.5rem;
    font-size: 2rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 1.43px;
  line-height: 2.75rem;
  text-transform: uppercase;
  font-weight: 500;

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 1.75rem;
    letter-spacing: 2px;
  }
`;

const Heading3 = styled.h3`
  font-size: 2rem;
  letter-spacing: 1.14px;
  line-height: 2rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const Heading4 = styled.h4`
  font-size: 1.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Heading5 = styled.h5`
  font-size: 1.5rem;
  letter-spacing: 1.71px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Heading6 = styled.h6`
  font-size: 1.125rem;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Overline = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.625rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 0.93px;
  line-height: 1.5625rem;
  font-weight: 700;
`;

const CheckoutFormHeader = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 0.93px;
  line-height: 1.5625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.orange};
  text-transform: uppercase;
`;

const Body = styled.p`
  font-size: 0.9375rem;
  letter-spacing: 0;
  line-height: 1.5625rem;
  font-weight: 500;
`;

const RemoveAll = styled.p`
  opacity: 0.5;
  font-size: 1rem;
  letter-spacing: 0;
  line-height: 1.5625rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;

const CartBody = styled.p`
  font-size: 1rem;
  line-height: 1.5625rem;
  text-transform: uppercase;
`;
// ===== END OF STYLING =====

const Text = ({ type, content, color, opacity, mb, mt, ml, mr }) => {
  const style = {
    color: color ? color : "",
    opacity: opacity ? opacity : "1",
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  // check which type of text is requested and return with the stylings outlined above
  switch (type) {
    case "heading1":
      return <Heading1 style={style}>{content}</Heading1>;

    case "heading2":
      return <Heading2 style={style}>{content}</Heading2>;

    case "heading3":
      return <Heading3 style={style}>{content}</Heading3>;

    case "heading4":
      return <Heading4 style={style}>{content}</Heading4>;

    case "heading5":
      return <Heading5 style={style}>{content}</Heading5>;

    case "heading6":
      return <Heading6 style={style}>{content}</Heading6>;

    case "overline":
      return <Overline style={style}>{content}</Overline>;

    case "subtitle":
      return <SubTitle style={style}>{content}</SubTitle>;

    case "body":
      return <Body style={style}>{content}</Body>;

    case "removeAll":
      return <RemoveAll style={style}>{content}</RemoveAll>;

    case "cartBody":
      return <CartBody style={style}>{content}</CartBody>;

    case "checkoutFormHeader":
      return <CheckoutFormHeader style={style}>{content}</CheckoutFormHeader>;

    default:
      break;
  }
};

export default Text;
