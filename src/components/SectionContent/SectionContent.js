import React from 'react';
import classes from './SectionContent.module.scss';

const SectionContent = () => {
  return (
    <section className={classes.sectionContainer}>
      <div className={classes.sectionContainer_header}>
        <h1>Welcome to CompanyName!</h1>
      </div>
    </section>
  );
};

export default SectionContent;
