import React, { useContext } from 'react';
import classes from './Card.module.scss';
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';

import StateContext from '../../store/state-context';

const Card = () => {
  const { fetchedData } = useContext(StateContext);
  return (
    <section className={classes.card}>
      <CardHeader />
      <CardContent />
    </section>
  );
};

export default Card;
