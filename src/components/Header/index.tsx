import React from "react";
import { Container, NavContainer, Logo, Nav } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <NavContainer>
        <Link className="link" to={"/"}>
          <Nav>Home</Nav>
        </Link>
        <Link className="link" to={"/Portfolio"}>
          <Nav>Portfolio</Nav>
        </Link>
        <Link className="link" to={"/AboutMe"}>
          <Nav>About Me</Nav>
        </Link>
      </NavContainer>
    </Container>
  );
};
