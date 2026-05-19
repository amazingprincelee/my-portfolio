import React from 'react';
import { projects } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';
import FeaturedProjectCard from '../components/FeaturedProjectCard';

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-stretch">
            {projects.map((data, i) => {
              if (data.status === 'Featured') {
                return <FeaturedProjectCard key={`project-${i}`} {...data} />;
              }
              return <ProjectsCard key={`project-${i}`} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Projects;
