import React from 'react';
import Img from 'gatsby-plugin-image'

function Navbar() {
  return (
    <header className="page-header" id="navbar">
      <a href="#profile">
        <div className="site-logo">NICHOLAS LAMB</div>
      </a>
      {/* <!-- <img src="img/nicholas_lamb_logo.svg" alt="My name, Nicholas Lamb" className="page-header__item"> --> */}

      {/* <!-- Navigation links --> */}
      <nav className="main-nav page-header__item">
        <div role="presentation" className="dropdown">
          <Img src="img/hamburger_menu_icon.svg" alt="Hidden Menu Icon" className="dropdown-menu__icon"></Img>
          <ul role="menubar" className="nav-list dropdown-content">
            <li role="presentation">
              <link to="#profile" className="nav-list__item">Home</link>
            </li>
            <li role="presentation">
              <link to="#about" className="nav-list__item">About</link>
            </li>
            <li role="presentation">
              <link to="#tech-skills" className="nav-list__item">Skills</link>
            </li>
            <li role="presentation">
              <link to="#projects" className="nav-list__item">Projects</link>
            </li>
            <li role="presentation">
              <link to="#contact-me" className="nav-list__item">Contact</link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;