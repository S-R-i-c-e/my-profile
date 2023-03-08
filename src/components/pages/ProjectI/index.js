import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectI(data) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.summary}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Button href={data.repo} variant="primary">{data.heading}</Button>
        </Card.Body>
      </Card>
    );
}

export default ProjectI;