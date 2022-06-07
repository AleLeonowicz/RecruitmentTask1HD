import React, { useContext } from 'react';
import classes from './CardHeader.module.scss';
import StateContext from '../../store/state-context';

const CardHeader = () => {
  const { firstName, fetchedData } = useContext(StateContext);
  return (
    <div className={classes.cardHeader}>
      {!fetchedData.login && <h1>Welcome to CompanyName!</h1>}
      {fetchedData.login && <h1>Hi {firstName}! It's good to see you!</h1>}
    </div>
  );
};

export default CardHeader;
