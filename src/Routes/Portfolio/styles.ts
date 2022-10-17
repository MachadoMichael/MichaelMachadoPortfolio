import styled from "styled-components";
import Darkroom from "../../assets/images/darkroom.jpg";

export const Container = styled.main`
  display: flex;

  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${Darkroom});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Banners = styled.section`
  opacity: 1;
  width: 56vw;
  height: 80vh;
  position: absolute;
  background-color: black;
  display: grid;
  border-radius: 4px;
  grid-template-columns: auto auto;
  margin-top: 4%;
  justify-content: space-evenly;
  align-items: center;
  transition: 1s;
  z-index: 1;
`;

export const View = styled.section`
  box-sizing: border-box;
  height: 10vh;
  width: 25vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  transition: 2s;
  background-color: #09090a;
  text-align: center;

  &:hover {
    border: 1px solid #fff;
    background-color: #262626;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin: 2% 1%;
`;

export const Description = styled.h5`
  margin: 0;
`;
