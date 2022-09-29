import styled from "styled-components";
import sky from "../../assets/images/sky.jpg";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${sky});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main``;
export const Contact = styled.picture`
  position: fixed;
  right: 0;
  margin-right: 40px;
`;
export const Image = styled.img`
  width: 20vw;
`;

export const Description = styled.section`
  width: 50%;
  background-color: #09090a;
  padding: 1% 4%;
  box-sizing: border-box;
  margin: auto;
`;
export const Paragraph = styled.p`
  color: white;
`;
export const Buttons = styled.section`
  position: fixed;
  right: 0;
  margin-right: 80px;
  margin-top: 10px;
  background-color: #09090a;
  padding: 0.3%;
`;

export const Icon = styled.img`
  height: 5vh;
  margin: 0 2px;
  cursor: pointer;
`;
