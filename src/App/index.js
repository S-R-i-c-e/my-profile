import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../components/NavTabs/index.js';
import Header from '../components/Header';
import Home from '../components/pages/Home/index.js';
import ProjectGalleryI from '../components/pages/ProjectGalleryI/index.js';
import Contact from '../components/pages/Contact/index.js';
import styles from "./my-style.module.css";

function App() {
  return (
    <Router>
      <div>
      <Header element={<Header />} />
        <NavTabs basename="my-profile"/>

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/my-profile/" element={<Home />} />
          <Route path="/my-profile/project-gallery" element={<ProjectGalleryI />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/my-profile/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

