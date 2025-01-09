import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>MijnPortfolio</Logo>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about">Over Mij</Link>
        <Link to="/projects">Projecten</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar;
