import {
  Container,
  Main,
  Image,
  Buttons,
  Description,
  Paragraph,
  Contact,
  Icon,
} from "./styles";

import github from "../../assets/icons/icons8-github-512.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import ProfilePhoto from "../../assets/images/profile-pic.png";

export const AboutMe = () => {
  return (
    <Container>
      <Main>
        <Contact>
          <Image src={ProfilePhoto}></Image>
          <Buttons>
            <Icon
              src={github}
              onClick={() => {
                var newAba = window.open(
                  "https://github.com/MachadoMichael",
                  "_blank"
                );
                newAba?.focus();
              }}
            ></Icon>
            <Icon
              src={linkedin}
              onClick={() => {
                var newAba = window.open(
                  "https://www.linkedin.com/in/michael-machado-20955a244/",
                  "_blank"
                );
                newAba?.focus();
              }}
            ></Icon>
            <Icon
              src={email}
              onClick={() => {
                window.location.href = "mailto:machado.m3@icloud.com";
              }}
            ></Icon>
            <Icon
              src={whatsapp}
              onClick={() => {
                var newAba = window.open("https://wa.me/21991240450", "_blank");
                newAba?.focus();
              }}
            ></Icon>
          </Buttons>
        </Contact>
        <Description>
          <Paragraph>
            Hello! 🖖
            <br />
            Me alegra muito ter você por aqui, te convido a conhecer um pouco
            mais do meu 'código-fonte' e do meu pedaço na Matrix.
            <br />
            <br />
            🔹Quem é o Michael enquanto pessoa❓
            <br />
            O Michael é criativo, comunicativo, resoluto e muito adaptativo.
            Acredito que a educação é a ferramenta mais importante de
            desenvolvimento da sociedade. Atualmente segue "espalhando a
            palavra" da programação e buscando ajudar pessoas a resolverem seus
            desafios. (...) Vale comentar é Michael como o Jordan🏀 ou o
            Jackson🕺, provavelmente você tem essa dúvida 😁
            <br />
            <br />
            🔹Quem é o Michael enquanto desenvolvedor❓
            <br />
            O Michael é um desenvolvedor focado no cliente. Gosta de criar
            sistemas que não seja apenas a solução do problema, mas também uma
            boa experiência para o usuário. Atualmente se divide em trabalhos
            freelancer, como: Sistema para calcular o custo de manufatura de
            produtos em um restaurante; Site profissional para contador; Site do
            melhor estúdio de fotografia focado em Arquitetura do Brasil(em
            desenvolvimento). E estudar com cursos ( concluído Programador BR,
            atualmente na DIO e posteriormente pretende fazer Ignite da
            Rocketseat. Além de inglês e espanhol na Kultive) , livros ( de
            financias e programação ), podcasts ( Primo Tech, DevMidia ) e
            palestras ( Codecon ) afim de aprender novas maneiras de resolver
            problemas utilizando a programação.
            <br /> <br />
            🧑‍💼 Do empreendedorismo até programação🧑‍💻
            <br />O Michael é o programador de alma mas tem raiz no
            empreendedorismo. Como veio de família empreendedora ele já fez de
            tudo um pouco. Como aprender a fazer pão, cortar tecido, desenvolver
            design de loja de roupa feminina e restaurante. Também já colaborou
            na criação de marca e organização de ambientes de trabalho para
            otimizar a produção. Todas essas experiências somam no seu
            desenvolvimento e lhe deram uma imensa capacidade de adaptação, além
            de uma nova perspectiva sobre os produtos desenvolvidos (sempre
            voltada a satisfação do cliente).
          </Paragraph>
        </Description>
      </Main>
    </Container>
  );
};
