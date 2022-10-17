import {
  Container,
  Image,
  Info,
  Title,
  Occupation,
  Specialization,
} from "./styles";
import laptop from "../../assets/images/laptop_4-wallpaper-1920x1080.jpg";

export const Home = () => {
  return (
    <Container>
      <Info>
        <Title>MICHAEL MACHADO</Title>
        <Occupation>Desenvolvedor de Software</Occupation>
        <Specialization>[React, Javascript, Typescript, Node]</Specialization>
      </Info>
      <Image src={laptop}></Image>
    </Container>
  );
};
