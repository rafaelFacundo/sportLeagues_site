import { styled } from "styled-components";

interface ImageDivProps {
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const ImageDiv = styled.div<ImageDivProps>`
  box-sizing: border-box;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  position: ${(props) => (props.position ? props.position : "auto")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.left ? props.left : "auto")};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

interface ImageComponentProps {
  source?: string;
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Image: React.FC<ImageComponentProps> = ({
  source,
  width,
  height,
  position,
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <ImageDiv
      width={width}
      height={height}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      <Img src={source} />
    </ImageDiv>
  );
};

export default Image;
