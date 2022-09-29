import { Container, View, Banners } from "./styles";
import { useState } from "react";
import { ProjectInfoScreen } from "../ProjectInfoScreen";
import { data as MCA } from "../../ProjectsData/MCA/data";
import { data as Nord } from "../../ProjectsData/Nord/data";
import { data as THR } from "../../ProjectsData/THR/data";
import { data as Blockbuster } from "../../ProjectsData/Blockbuster/data";
import { data as Pokemon } from "../../ProjectsData/Pokemon/data";
import { data as Chat } from "../../ProjectsData/Chat/data";
import { data as NLOB } from "../../ProjectsData/NLOB/data";

export const Portfolio = () => {
  const [projects, setProjects] = useState([
    MCA,
    Blockbuster,
    THR,
    Nord,
    NLOB,
    Chat,
    Pokemon,
  ]);
  const [showProject, setShowProject] = useState(MCA);
  const [transition_On, setTransition_On] = useState(true);
  const [indexProject, setIndexProject] = useState(0);
  const [bannersOpacity, setBannersOpacity] = useState(1);
  const [displayBanners, setDisplayBanners] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(MCA);

  var changeBanner: NodeJS.Timer;

  if (transition_On === true) {
    changeBanner = setInterval(() => {
      if (indexProject >= projects.length) {
        setIndexProject(0);
        setShowProject(projects[0]);
      } else {
        setShowProject(projects[indexProject + 1]);
        setIndexProject(indexProject + 1);
      }
      clearInterval(changeBanner);
    }, 2000);
  }

  return (
    <Container>
      <Banners opacity={bannersOpacity} display={displayBanners}>
        {projects.map((project, number) => {
          return (
            <View
              onMouseOver={() => {
                clearInterval(changeBanner);
                setTransition_On(false);
                setShowProject(project);
              }}
              onMouseLeave={() => {
                setTransition_On(true);
              }}
              onClick={() => {
                setBannersOpacity(0);
                setTransition_On(false);
                setDisplayBanners("none");
                setSelectedProject(project);
              }}
              key={number}
              backgroundImage={project.banner}
              opacity={project === showProject ? 1 : 0}
              color={
                project === Blockbuster || project === THR
                  ? "rgb(0, 50, 150)"
                  : "black"
              }
            ></View>
          );
        })}
      </Banners>
      <ProjectInfoScreen
        setBannerOpacity={setBannersOpacity}
        setTransition_On={setTransition_On}
        setDisplayBanners={setDisplayBanners}
        opacity={bannersOpacity === 1 ? 0 : 1}
        selectedProject={selectedProject}
      />
    </Container>
  );
};
