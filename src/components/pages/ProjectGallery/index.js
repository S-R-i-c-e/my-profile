import React from "react";
import styles from "./my-style.module.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectGallery() {
  const carouselItems = [(<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/500/300?img=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>),
  (<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/500/300?img=3"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>)];
  return (
    <div>
      <div className='container-fluid' >
        <div className="row">
          <div className="col-sm-12">
            <h3>React Bootstrap Carousel</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel>
              {carouselItems}

            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;