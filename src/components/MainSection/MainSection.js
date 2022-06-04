import React from 'react';
import classes from './MainSection.module.scss';
import Card from '../Card/Card';

const MainSection = () => {
  return (
    <section className={classes.section}>
      <Card />
    </section>
  );
};

export default MainSection;
