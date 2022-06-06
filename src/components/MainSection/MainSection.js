import React from 'react';
import classes from './MainSection.module.scss';
import Card from '../Card/Card';

import StateProvider from '../../store/StateProvider';

const MainSection = () => {
  return (
    <section className={classes.section}>
      <StateProvider>
        <Card />
      </StateProvider>
    </section>
  );
};

export default MainSection;
