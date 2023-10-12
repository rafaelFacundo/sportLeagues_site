import React from "react";
import { styled } from "styled-components";

interface H3props {
  fontSize?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const H3 = styled.h3<H3props>`
  font-family: "Roboto Condensed";
  position: ${(props) => props.position};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.left ? props.left : "auto")};
`;

interface TextH3ComponentProps {
  children: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const TextH3: React.FC<TextH3ComponentProps> = ({
  children,
  position,
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <H3 position={position} top={top} left={left} right={right} bottom={bottom}>
      {children}
    </H3>
  );
};

export default TextH3;
