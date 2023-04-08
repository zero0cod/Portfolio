import React from "react";
//styles
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="Logo" to="/">
          <h3>Sudhi S </h3>Web Developer
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1.My Skills</Link>
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
        </li>{" "}
        <li>
          <Link to="/contact">3.To Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: grey;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #Logo {
    font-size: 1.5rem;
    font-family: cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
export default Nav;
