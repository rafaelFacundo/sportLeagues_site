import React from "react";
import SiteLogo from "../../assets/site_logo.png";
import UpperDivContent from "../../components/UpperDivContent";
import Image from "../../components/Image";

const InitialScreean: React.FC = () => {
  return (
    <UpperDivContent>
      <Image source={SiteLogo} />
    </UpperDivContent>
  );
};

export default InitialScreean;
