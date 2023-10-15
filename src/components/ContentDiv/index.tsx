import React from "react";
import { styled } from "styled-components";

interface DivProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const Div = styled.div<DivProps>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "auto"};
`;

interface ContentDivComponentProps {
  children: string | JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const ContentDiv: React.FC<ContentDivComponentProps> = ({
  children,
  width,
  height,
  backgroundColor,
}) => {
  return (
    <Div width={width} height={height} backgroundColor={backgroundColor}>
      {children}
    </Div>
  );
};

export default ContentDiv;
