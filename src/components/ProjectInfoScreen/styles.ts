import styled, { keyframes } from "styled-components";
import DarkRoom from "../../assets/images/darkroom.jpg";

const ColorFilter = keyframes`
 0%{
    filter: hue-rotate(0deg);
 }
 50%{
    filter: hue-rotate(40deg);
 }
 100%{
  filter: hue-rotate(0deg);
 }
`;

export const Container = styled.main<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 10%;
  background-image: url(${DarkRoom});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s;
  z-index: 0;
  animation: ${ColorFilter} 10s linear infinite;
  overflow-y: hidden;
`;

export const CloseInfoScreen = styled.section`
  width: 40%;
  text-align: center;
  color: white;
  background-color: #09090a;
  padding: 0.5% 0;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    background-color: black;
  }
`;

export const Description = styled.section`
  width: 40%;
  height: 45%;
  background-color: #1c1c1f;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 30px;
`;
export const Paragraph = styled.p`
  width: 80%;
  margin: auto;
  background-color: #09090a;
  box-shadow: 1px 1px 4px #1c1c1f;
  padding: 4% 5%;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const LinksContainer = styled.section`
  justify-self: flex-end;
  align-self: flex-start;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const Icon = styled.img`
  height: 100%;
  margin: 0 2px;
  cursor: pointer;
`;

export const ImageSection = styled.section`
  width: 40%;
  background-color: black;
`;

export const GIF = styled.img`
  width: 100%;
  height: 100%;
`;
