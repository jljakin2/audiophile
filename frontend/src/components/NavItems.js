// third-party
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// helpers
import { navItems } from "../helpers/nav";

// ===== START OF STYLING =====
const NavList = styled.ul`
  display: flex;

  & > a {
    text-decoration: none;
  }

  & > *:not(:last-child) {
    margin-right: 2rem;

    // 450px
    @media only screen and (max-width: 28.125em) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  // 900px
  @media only screen and (max-width: 56.25em) {
    display: ${props => (props.type === "nav" ? "none" : "flex")};
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
    align-items: center;

    width: 100%;
  }
`;

const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${({ theme }) => theme.white};

  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;
// ===== END OF STYLING =====

const NavItems = ({ type }) => {
  // make sure all nav items are also in lowercase so we can add them as a route
  const renderedNavItems = navItems.map((item, index) => {
    const lowerItem = item.toLowerCase();

    return (
      <Link key={index} to={item === "Home" ? "/" : `/category/${lowerItem}`}>
        <NavItem>{item}</NavItem>
      </Link>
    );
  });

  return <NavList type={type}>{renderedNavItems}</NavList>;
};

export default NavItems;
