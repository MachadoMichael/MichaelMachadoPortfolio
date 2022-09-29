import styled, { keyframes } from "styled-components";

const changeColor = keyframes`
 0%{
    color: rgb(255,255,255);
 }
25%{
  color: rgb(0,150,255);
}
50%{
  color: rgb(255,0,150);
}

 100%{
  color: rgb(255,255,0);
 }
`;

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`;

export const Logo = styled.div``;
export const NavContainer = styled.ul``;
export const Nav = styled.li`
  color: white;
  list-style: none;

  &:hover {
    animation: ${changeColor} 2s linear infinite;
  }
`;
