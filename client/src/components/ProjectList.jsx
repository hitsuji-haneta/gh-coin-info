import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

import togglConfig from '../toggl-config.json';
const projects = togglConfig.projects || [];

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SelectedProjectName = ({ project }) => {
  if (!project) return <></>;
  return <p>選択中：{project.name}</p>;
};

const ProjectList = () => {
  const [selectedProjectId, setProjectId] = useState();
  const selectedProject = projects.find(
    project => project.id === selectedProjectId
  );
  return (
    <Container>
      <SelectedProjectName project={selectedProject} />
      <Wrapper>
        {projects.map(project => (
          <ProjectCard
            id={project.id}
            name={project.name}
            image={project.image}
            setProject={setProjectId}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProjectList;
