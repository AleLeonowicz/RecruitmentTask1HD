import React from 'react';
import classes from './Header.module.scss';

import companyLogo from '../../assets/svg/CompanyLogo.svg';

const Header = () => {
  return (
    <header id="header" className={classes.header}>
      <section id="header-content" className={classes.header_container}>
        <img
          alt="Company Logo"
          className={classes.header_logo}
          src={companyLogo}
        />
      </section>
    </header>
  );
};

export default Header;
