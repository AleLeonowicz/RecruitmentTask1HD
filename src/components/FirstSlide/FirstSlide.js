import React from 'react';
import classes from './FirstSlide.module.scss';
import illustration from '../../assets/png/FormIcon.png';

const FirstSlide = () => {
  return (
    <section className={classes.firstSlide}>
      <p>Looking for GitHub users? Let's find them!</p>
      <p>
        Please, fill out a simple form on the next pages. It will take only a
        minute.
      </p>
      <img src={illustration} alt="Illustration of a person filling a form" />
    </section>
  );
};

export default FirstSlide;
