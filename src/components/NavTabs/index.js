import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./my-style.module.css";

function NavTabs() {
  return (
    <>
      <style type="text/css">
        {`
      .nav {

      }
      .nav-tab {
        color: var(--primary-color);
        font-family: var(--title-font);
      }
      `}
      </style>
      <ul className="nav nav-tab">
        <li className="nav-item">
          <NavLink
            to="/my-profile/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/my-profile/project-gallery"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Project Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/my-profile/contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
