import styled from "styled-components";

export const Container = styled.main``;

export const Banners = styled.section<{ opacity: number; display: string }>`
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 10%;
  background-color: black;
  display: ${(props) => props.display};
  grid-template-columns: auto auto auto auto;
  gap: 0;
  transition: 2s;
  z-index: 1;
`;

export const View = styled.section<{
  backgroundImage: string;
  color?: string;
  opacity: number;
}>`
  opacity: ${(props) => props.opacity};
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color};
  background-position: center;
  box-sizing: border-box;
  width: 25vw;
  height: 45vh;
  transition: 2s;
  border: 1px solid gray;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
