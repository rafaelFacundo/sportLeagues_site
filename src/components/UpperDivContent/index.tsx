import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  width: "100%";
  height: "100%";
  background-color: "white";
`;

interface UpperDivContentProps {
  children: JSX.Element[] | JSX.Element | string;
}

const UpperDivContent: React.FC<UpperDivContentProps> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default UpperDivContent;
