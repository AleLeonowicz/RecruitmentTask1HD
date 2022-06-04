import React from 'react';
import classes from './Footer.module.scss';
import githubLogo from '../../assets/svg/github-logo.svg';
import linkedinLogo from '../../assets/svg/linkedin-logo.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer_signature}>
        @ 2022 Built and designed by Aleksandra Leonowicz
      </p>
      <nav className={classes.footer_nav}>
        <a
          href="https://github.com/AleLeonowicz"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.footer_nav_github}
            src={githubLogo}
            alt="Github link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aleksandra-leonowicz/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.footer_nav_linkedin}
            src={linkedinLogo}
            alt="LinkedIn link"
          />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
