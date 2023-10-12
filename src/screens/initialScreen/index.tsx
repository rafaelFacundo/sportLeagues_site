import React, { useRef } from "react";
import SiteLogo from "../../assets/site_logo.png";
import UpperDivContent from "../../components/UpperDivContent";
import TextH3 from "../../components/TextH3";
import Image from "../../components/Image";

const InitialScreean: React.FC = () => {
  //height of the window used to centrilize the image vertically in the center of the window
  const windowHeight: number = useRef(window.innerHeight).current;

  return (
    <UpperDivContent>
      <Image
        source={SiteLogo}
        height="270px"
        width="270px"
        position="absolute"
        top={`${Math.round(windowHeight / 2) - 135}px`}
        left="30px"
      />
      <TextH3
        position="absolute"
        left="30px"
        top={`${Math.round(windowHeight / 2) + 140}px`}
      >
        Organize momentos icônicos
      </TextH3>
    </UpperDivContent>
  );
};

export default InitialScreean;
