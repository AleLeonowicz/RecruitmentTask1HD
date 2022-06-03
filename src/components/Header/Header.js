import React from 'react';
import classes from './Header.module.scss';

import companyLogo from '../../assets/svg/CompanyLogo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_container}>
        <img className={classes.header_logo} src={companyLogo} />
      </div>
    </header>
  );
};

export default Header;
