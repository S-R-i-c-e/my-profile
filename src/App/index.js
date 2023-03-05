import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../components/NavTabs/index.js';
import Header from '../components/Header';
import Home from '../components/pages/Home';
import ProjectGallery from '../components/pages/ProjectGallery/index.js';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';
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
          <Route path="/my-profile/project-gallery" element={<ProjectGallery />} />
          <Route path="/my-profile/blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/my-profile/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

