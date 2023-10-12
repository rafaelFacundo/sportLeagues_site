import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

interface UpperDivContentProps {
  children: JSX.Element[] | JSX.Element | string;
}

const UpperDivContent: React.FC<UpperDivContentProps> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default UpperDivContent;
