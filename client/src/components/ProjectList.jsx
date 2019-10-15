import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

import togglConfig from '../toggl-config.json';
const projects = togglConfig.projects || [];

const Wrapper = styled.div`
  background-color: #282c34;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ProjectList = () => {
  const [selectedProject, setProject] = useState();
  return (
    <Wrapper>
      {projects.map(project => (
        <ProjectCard id={project.id} name={project.name} image={project.image} />
      ))}
    </Wrapper>
  );
};

export default ProjectList;
