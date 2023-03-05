import React from "react";
import styles from "./my-style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectI from "../ProjectI/index.js";
import projects from "../../../projects.json"

function ProjectGalleryI() {

    return (
      <div>
        <div className='container-fluid' >
          <div className="row">
            <div className="col-sm-12">
              <h3>Project Gallery</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">

                {projects.map(project => <ProjectI {...project} />)}

            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectGalleryI;