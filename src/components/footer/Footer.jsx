import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shashi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.linkedin.com/in/shashidharsangepu/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Shashi5657"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/mr.villain29/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
