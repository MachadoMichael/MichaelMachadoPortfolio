import Github from "../../assets/icons/icons8-github-512.png";
import Site from "../../assets/icons/icons8-internet-explorer-240.png";
import {
  Container,
  CloseInfoScreen,
  Description,
  Title,
  Paragraph,
  LinksContainer,
  ImageSection,
  GIF,
  Icon,
} from "./styles";

type Project = {
  name: string;
  description: string;
  github: string;
  banner: string;
  site: string;
  gif: string;
};

type Props = {
  setBannerOpacity: React.Dispatch<React.SetStateAction<number>>;
  setTransition_On: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayBanners: React.Dispatch<React.SetStateAction<string>>;
  opacity: number;
  selectedProject: Project;
};

export const ProjectInfoScreen = ({
  setBannerOpacity,
  setTransition_On,
  setDisplayBanners,
  opacity,
  selectedProject,
}: Props) => {
  return (
    <Container opacity={opacity}>
      <CloseInfoScreen
        onClick={() => {
          setBannerOpacity(1);
          setTransition_On(true);
          setDisplayBanners("grid");
        }}
      >
        🔙 Portfolio
      </CloseInfoScreen>
      <Description>
        <Title>{selectedProject.name}</Title>
        <Paragraph>{selectedProject.description}</Paragraph>
        <LinksContainer>
          <Icon
            src={Github}
            onClick={() => {
              var newAba = window.open(selectedProject.github, "_blank");
              newAba?.focus();
            }}
          ></Icon>
          <Icon
            src={Site}
            onClick={() => {
              var newAba = window.open(selectedProject.site, "_blank");
              newAba?.focus();
            }}
          ></Icon>
        </LinksContainer>
      </Description>
      <ImageSection>
        <GIF src={selectedProject?.gif}></GIF>
      </ImageSection>
    </Container>
  );
};
