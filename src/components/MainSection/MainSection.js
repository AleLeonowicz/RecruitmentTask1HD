import React from 'react';
import classes from './MainSection.module.scss';
import SectionContent from '../SectionContent/SectionContent';

const MainSection = () => {
  return (
    <section className={classes.section}>
      <SectionContent />
    </section>
  );
};

export default MainSection;
