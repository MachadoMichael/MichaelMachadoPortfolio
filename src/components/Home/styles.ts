import styled, { keyframes } from "styled-components";

const ColorFilter = keyframes`
 0%{
    filter: hue-rotate(0deg);
 }
 100%{
    filter: hue-rotate(360deg);
 }
`;

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

export const Container = styled.main`
  position: absolute;
  top: 10%;
  background-color: #010101;
  width: 100vw;
  height: 90vh;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  animation: ${ColorFilter} 2s linear infinite;
`;

export const Info = styled.div`
  position: fixed;
  color: white;
  width: 50vw;
  z-index: 1;
  bottom: 0;
  margin-left: 2%;
  margin-bottom: 5%;
`;
export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`;
export const Occupation = styled.h2`
  margin: 0;
  animation: ${changeColor} 10s linear infinite;
`;
export const Specialization = styled.h4`
  margin: 1%;
  color: white;
  
`;
