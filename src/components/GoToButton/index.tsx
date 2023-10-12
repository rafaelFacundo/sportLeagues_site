import { styled } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  backgroundColor?: string;
}

const Button = styled.button<ButtonProps>`
  font-family: "Roboto Condensed";
  text-align: center;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  position: ${(props) => (props.position ? props.position : "auto")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.left ? props.left : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "auto"};
`;

interface GoToButtonComponentProps {
  children: string;
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  backgroundColor?: string;
}

const GoToButton: React.FC<GoToButtonComponentProps> = ({
  children,
  width,
  height,
  position,
  top,
  left,
  right,
  bottom,
  backgroundColor,
}) => {
  return (
    <Button
      width={width}
      height={height}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      backgroundColor={backgroundColor}
    >
      {children}
    </Button>
  );
};

export default GoToButton;
