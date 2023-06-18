import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../cssModules/Header.module.css'


const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className={`${styles.navLink} fs-4`}
              activeclassname={styles.activeNavLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`${styles.navLink} fs-4`}
              activclassname={styles.activeNavLink}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;