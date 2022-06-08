import React, { useContext } from 'react';
import classes from './GithubUserInfo.module.scss';
import StateContext from '../../store/state-context';

const GithubUserInfo = () => {
  const {
    fetchedData,
    setFirstName,
    setLastName,
    setGitUsername,
    setEmail,
    setFetchedData,
  } = useContext(StateContext);

  const resetStateHandler = () => {
    setFirstName('');
    setLastName('');
    setGitUsername('');
    setEmail('');
    setFetchedData({});
  };

  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.container}>
        <div className={classes.container_imgContainer}>
          <img alt="github avatar" src={fetchedData.avatar_url}></img>
          <h1 className={classes.displayWhenSmallerThanLarge}>
            {fetchedData.name || 'No information provided'}
          </h1>
        </div>
        <div className={classes.container_infoContainer}>
          <div className={classes.container_headerContainer}>
            <h1 className={classes.displayWhenBiggerThanMedium}>
              {fetchedData.name || 'No information provided'}
            </h1>
          </div>
          <div className={classes.container_detailsContainer}>
            <h2>Github Username:</h2>
            <p>{fetchedData.login}</p>
            <h2>E-mail address:</h2>
            <p>{fetchedData.email || 'No information provided'}</p>
            <h2>Github Profile:</h2>
            <p>
              <a href={fetchedData.html_url} target="_blank" rel="noreferrer">
                {fetchedData.html_url}
              </a>
            </p>
            <h2>Followers:</h2>
            <p>{fetchedData.followers}</p>
            <h2>Following:</h2>
            <p>{fetchedData.following}</p>

            <h2>Public Repositories:</h2>
            <p>{fetchedData.public_repos}</p>
            <h2>Public Gists:</h2>
            <p>{fetchedData.public_gists}</p>
          </div>
          <div
            className={`${classes.container_detailsContainer} ${classes.container_detailsContainer_rightColumn}`}
          >
            <h2>Twitter Username:</h2>
            <p>{fetchedData.twitter_username || 'No information provided'}</p>
            <h2>Hireable:</h2>
            <p>
              {(fetchedData.hireable === true && 'Yes') ||
                (fetchedData.hireable === false && 'No') ||
                'No information provided'}
            </p>
            <h2>Location:</h2>
            <p>{fetchedData.location || 'No information provided'}</p>
            <h2>Blog:</h2>
            <p>
              {(fetchedData.blog && (
                <a href={fetchedData.blog} target="_blank" rel="noreferrer">
                  {fetchedData.blog}
                </a>
              )) ||
                'No information provided'}
            </p>
            <h2>Company:</h2>
            <p>{fetchedData.company || 'No information provided'}</p>
            <h2>Account Type:</h2>
            <p>{fetchedData.type || 'No information provided'}</p>
            <h2>Bio:</h2>
            <p>{fetchedData.bio || 'No information provided'}</p>
          </div>
        </div>
      </div>
      <div className={classes.goBackToForm}>
        <p className={classes.goBackToForm}>
          {'Not the account you were looking for? Klick '}
          <button onClick={resetStateHandler}>here</button> to fill the form
          again.
        </p>
      </div>
    </section>
  );
};

export default GithubUserInfo;
