import React, { useContext } from 'react';
import classes from './SecondSlide.module.scss';
import StateContext from '../../store/state-context';
import { setInputHandler, setgitInputHandler } from '../../utils';

const SecondSlide = () => {
  const {
    firstName,
    setFirstName,
    firstNameError,
    setFirstNameError,
    lastName,
    setLastName,
    lastNameError,
    setLastNameError,
    gitUsername,
    setGitUsername,
    gitUsernameError,
    setGitUsernameError,
  } = useContext(StateContext);

  return (
    <section className={classes.secondSlide}>
      <form className={classes.secondSlide_form}>
        <div className={classes.secondSlide_formContainer}>
          <label htmlFor="firstName">First Name:</label>
          <input
            className={`${classes.secondSlide_formContainer_input} ${
              firstNameError !== '' && classes.secondSlide_form_invalidInput
            }`}
            type="text"
            id="firstName"
            name="firstName"
            onChange={event =>
              setInputHandler(event, setFirstNameError, setFirstName)
            }
            value={firstName}
          />
          {firstNameError !== '' && (
            <p className={classes.secondSlide_formContainer_error}>
              {firstNameError} Please try again.
            </p>
          )}
        </div>

        <div className={classes.secondSlide_formContainer}>
          <label htmlFor="lastname">Last Name:</label>
          <input
            className={`${classes.secondSlide_formContainer_input} ${
              lastNameError !== '' && classes.secondSlide_form_invalidInput
            }`}
            type="text"
            id="lastName"
            name="lastName"
            onChange={event =>
              setInputHandler(event, setLastNameError, setLastName)
            }
            value={lastName}
          />
          {lastNameError !== '' && (
            <p className={classes.secondSlide_formContainer_error}>
              {lastNameError} Please try again.
            </p>
          )}
        </div>

        <div className={classes.secondSlide_formContainer}>
          <label htmlFor="gitUsername">Github username:</label>
          <input
            className={`${classes.secondSlide_formContainer_input} ${
              gitUsernameError !== '' && classes.secondSlide_form_invalidInput
            }`}
            type="text"
            id="gitUsername"
            name="githubUsername"
            onChange={event =>
              setgitInputHandler(event, setGitUsernameError, setGitUsername)
            }
            value={gitUsername}
          />
          {gitUsernameError !== '' && (
            <p className={classes.secondSlide_formContainer_error}>
              {gitUsernameError} Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default SecondSlide;
