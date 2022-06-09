import React, { useContext } from 'react';

import classes from './MainSection.module.scss';
import Card from '../Card/Card';
import StateContext from '../../store/state-context';
import GithubUserInfo from '../GithubUserInfo/GithubUserInfo';

const MainSection = () => {
  const { fetchedData } = useContext(StateContext);

  return (
    <section className={classes.section}>
      {!fetchedData?.login && <Card />}
      {fetchedData?.login && <GithubUserInfo />}
    </section>
  );
};

export default MainSection;
