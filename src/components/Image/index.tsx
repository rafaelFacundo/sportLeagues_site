import { styled } from "styled-components";

const Img = styled.img``;

interface ImageProps {
  source: string | undefined;
}

const Image: React.FC<ImageProps> = ({ source }) => {
  return (
    <>
      <Img src={source} />
    </>
  );
};

export default Image;
