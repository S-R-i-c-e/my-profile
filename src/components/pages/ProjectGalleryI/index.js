import React from "react";

import ProjectI from "../ProjectI/index.js";

import projects from "../../../projects.json"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ProjectGalleryI() {

  return (
    <div>
      <Container fluid>
        <Row>
          <h3>Project Gallery</h3>
        </Row>
        <Row>

          {projects.map(project => <ProjectI {...project} />)}

        </Row>
      </Container>
    </div>
  );
}

export default ProjectGalleryI;