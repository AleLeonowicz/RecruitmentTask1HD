import React, { useState, useContext } from 'react';
import classes from './SecondSlide.module.scss';
import StateContext from '../../store/state-context';
import { prohibitedSigns } from '../../constants';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

const SecondSlide = () => {
  const stateCtx = useContext(StateContext);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [gitUsernameError, setGitUsernameError] = useState('');

  const setFirstNameHandler = event => {
    setFirstNameError('');

    if (event.target.value.trim(' ') === '') {
      setFirstNameError('Please type something in.');
    }

    if (event.target.value.includes('  ')) {
      setFirstNameError('Double spaces are not allowed');
    }

    if (prohibitedSigns.some(sign => event.target.value.includes(sign))) {
      setFirstNameError('Special characters are not allowed');
    }

    if (event.target.value[0] === ' ') {
      stateCtx.setFirstName(event.target.value.substring(1));
      return;
    }

    stateCtx.setFirstName(event.target.value);
  };

  const invalidInputClass =
    firstNameError !== '' && classes.secondSlide_form_invalidInput;

  return (
    <section className={classes.secondSlide}>
      <form className={classes.secondSlide_form} action="">
        <label for="fName">First Name:</label>
        <input
          className={`${classes.secondSlide_form_input} ${invalidInputClass}`}
          type="text"
          id="fName"
          name="firstName"
          //   placeholder="Your name.."
          onChange={setFirstNameHandler}
          value={stateCtx.firstName}
        />
        {firstNameError !== '' && (
          <p className={classes.secondSlide_form_error}>
            Invalid input! {firstNameError} Please try again.
          </p>
        )}
      </form>

      <form className={classes.secondSlide_form} action="">
        <label for="lname">Last Name:</label>
        <input
          className={classes.secondSlide_form_input}
          type="text"
          id="lName"
          name="lastName"
          //   placeholder="Your last name.."
        />
      </form>

      <form className={classes.secondSlide_form} action="">
        <label for="gitUsername">Github username:</label>
        <input
          className={classes.secondSlide_form_input}
          type="text"
          id="gitUsername"
          name="githubUsername"
          //   placeholder="Your github username..."
        />
      </form>
    </section>
  );
};

export default SecondSlide;
