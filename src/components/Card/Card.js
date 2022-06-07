import React from 'react';
import classes from './Card.module.scss';
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';

const Card = () => {
  return (
    <section className={classes.card}>
      <CardHeader />
      <CardContent />
    </section>
  );
};

export default Card;
