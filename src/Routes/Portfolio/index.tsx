import { Container, View, Banners, Title, Description } from "./styles";

import {
  DataBaseClients,
  Iamhere,
  MCAestudio,
  NewLifeOldBills,
  ProjectChat,
  Riddlegame,
  THRContabilidade,
  Todolist,
  blockbuster,
  Pokemon,
  NordSystem,
} from "../../ProjectsData";

export const Portfolio = () => {
  const projects = [
    DataBaseClients,
    Riddlegame,
    MCAestudio,
    Todolist,
    Iamhere,
    THRContabilidade,
    NordSystem,
    NewLifeOldBills,
    ProjectChat,
    Pokemon,
    blockbuster,
  ];

  return (
    <Container>
      <Banners>
        {projects.map((project, number) => {
          return (
            <View
              onClick={() => {
                var newAba = window.open(project.github, "_blank");
                newAba?.focus();
              }}
              key={number}
            >
              <Title>{project.name}</Title>
              <Description>
                -{project.resources.map((item) => `  ${item} -  `)}
              </Description>
            </View>
          );
        })}
      </Banners>
    </Container>
  );
};
