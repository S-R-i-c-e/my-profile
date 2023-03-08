import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../components/NavTabs/index.js';
import Header from '../components/Header';
import Home from '../components/pages/Home/index.js';
import ProjectGalleryI from '../components/pages/ProjectGalleryI/index.js';
import Contact from '../components/pages/Contact/index.js';
import Container from 'react-bootstrap/Container';
import styles from "./my-style.module.css";

function App() {
  return (
    <Container fluid>
      <Router>
        <div>
          <Header element={<Header />} />
          <NavTabs basename="my-profile" />
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            <Route path="/my-profile/" element={<Home />} />
            <Route path="/my-profile/project-gallery" element={<ProjectGalleryI />} />
            {/* Define a route that will have descendant routes */}
            <Route path="/my-profile/contact/*" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default App;

