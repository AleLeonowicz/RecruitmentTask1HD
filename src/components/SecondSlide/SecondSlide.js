import React, { useContext } from 'react';
import classes from './SecondSlide.module.scss';
import StateContext from '../../store/state-context';

import { setInputHandler, setgitInputHandler } from '../../utils';

const SecondSlide = () => {
  const stateCtx = useContext(StateContext);

  return (
    <section className={classes.secondSlide}>
      <form className={classes.secondSlide_form}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.firstNameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="firstName"
          name="firstName"
          onChange={event =>
            setInputHandler(
              event,
              stateCtx.setFirstNameError,
              stateCtx.setFirstName
            )
          }
          value={stateCtx.firstName}
        />
        {stateCtx.firstNameError !== '' && (
          <p className={classes.secondSlide_form_error}>
            {stateCtx.firstNameError} Please try again.
          </p>
        )}
      </form>

      <form className={classes.secondSlide_form}>
        <label htmlFor="lastname">Last Name:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.lastNameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="lastName"
          name="lastName"
          onChange={event =>
            setInputHandler(
              event,
              stateCtx.setLastNameError,
              stateCtx.setLastName
            )
          }
          value={stateCtx.lastName}
        />
        {stateCtx.lastNameError !== '' && (
          <p className={classes.secondSlide_form_error}>
            {stateCtx.lastNameError} Please try again.
          </p>
        )}
      </form>

      <form className={classes.secondSlide_form}>
        <label htmlFor="gitUsername">Github username:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.gitUsernameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="gitUsername"
          name="githubUsername"
          onChange={event =>
            setgitInputHandler(
              event,
              stateCtx.setGitUsernameError,
              stateCtx.setGitUsername
            )
          }
          value={stateCtx.gitUsername}
        />
        {stateCtx.gitUsernameError !== '' && (
          <p className={classes.secondSlide_form_error}>
            {stateCtx.gitUsernameError} Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default SecondSlide;
