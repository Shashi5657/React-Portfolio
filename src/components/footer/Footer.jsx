import React from "react";
import "./footer.css";

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
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/shashidharsangepu/"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Shashi5657"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/mr.villain29/"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Shashidhar Sangepu. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
