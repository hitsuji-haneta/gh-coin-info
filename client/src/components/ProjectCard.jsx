import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  font-size: 0.7em;
  color: #282c34;
  width: 30vh;
  height: 40vh;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImageWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
`;
const Name = styled.p`
  height: 20%;
`;

const ProjectCard = ({ id, name, image }) => {
  console.log(image);
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default ProjectCard;
