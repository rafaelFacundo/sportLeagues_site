import React, { useRef } from "react";
import SiteLogo from "../../assets/site_logo.png";
import InitialVideo from "../../assets/videos/projetoVIdeosite.mp4";
import UpperDivContent from "../../components/UpperDivContent";
import TextH3 from "../../components/TextH3";
import Image from "../../components/Image";
import GoToButton from "../../components/GoToButton";
import { styled } from "styled-components";

interface LogoButtonDivProps {
  top: string;
}

const LogoButtonDiv = styled.div<LogoButtonDivProps>`
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: ${(props) => props.top};
  left: 30px;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const InitialScreean: React.FC = () => {
  //height of the window used to centrilize the image vertically in the center of the window
  const windowHeight: number = useRef(window.innerHeight).current;

  return (
    <UpperDivContent>
      <LogoButtonDiv top={`${Math.round(windowHeight / 2) - 150}px`}>
        <Image source={SiteLogo} height="270px" width="270px" />
        <TextH3>Organize momentos icônicos</TextH3>
        <GoToButton width="320px" backgroundColor="#1fd11f">
          Começar
        </GoToButton>
      </LogoButtonDiv>
      <Video src={InitialVideo} autoPlay muted loop />
    </UpperDivContent>
  );
};

export default InitialScreean;
