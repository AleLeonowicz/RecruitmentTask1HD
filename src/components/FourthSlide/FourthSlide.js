import React, { useContext } from 'react';
import classes from './FourthSlide.module.scss';
import StateContext from '../../store/state-context';

const FourthSlide = () => {
  const { fetchedData, firstName, lastName, gitUsername, email } =
    useContext(StateContext);

  //   console.log('classes', classes);

  return (
    <section className={classes.fourthSlide}>
      <div className={classes.fourthSlide_imgContainer}>
        <img alt="github avatar" src={fetchedData.avatar_url}></img>
      </div>
      <div className={classes.fourthSlide_infoContainer}>
        <h1>
          {firstName} {lastName}
        </h1>
        <div className={classes.fourthSlide_detailsContainer}>
          <h2>Github Username:</h2>
          <p>{gitUsername}</p>
          <h2>E-mail address:</h2>
          <p>{email}</p>
          <h2>Github Profile:</h2>
          <p>{fetchedData.html_url}</p>
          <h2>Followers:</h2>
          <p>{fetchedData.followers}</p>
          <h2>Following:</h2>
          <p>{fetchedData.following}</p>

          <h2>Public Repositories:</h2>
          <p>{fetchedData.public_repos || 'No information provided'}</p>
          <h2>Public Gists:</h2>
          <p>{fetchedData.public_gists || 'No information provided'}</p>
        </div>
        <div
          className={`${classes.fourthSlide_detailsContainer} ${classes.fourthSlide_detailsContainer_rightColumn}`}
        >
          <h2>Twitter Username:</h2>
          <p>{fetchedData.twitter_username || 'No information provided'}</p>
          <h2>Bio:</h2>
          <p>{fetchedData.bio || 'No information provided'}</p>
          <h2>Hireable:</h2>
          <p>{fetchedData.bio || 'No information provided'}</p>
          <h2>Location:</h2>
          <p>{fetchedData.location || 'No information provided'}</p>
          <h2>Blog:</h2>
          <p>{fetchedData.blog || 'No information provided'}</p>
          <h2>Company:</h2>
          <p>{fetchedData.company || 'No information provided'}</p>
          <h2>Account Type:</h2>
          <p>{fetchedData.type || 'No information provided'}</p>
        </div>
      </div>
    </section>
  );
};

export default FourthSlide;
