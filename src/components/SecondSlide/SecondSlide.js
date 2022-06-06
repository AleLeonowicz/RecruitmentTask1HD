import React, { useContext } from 'react';
import classes from './SecondSlide.module.scss';
import StateContext from '../../store/state-context';
import { prohibitedSigns } from '../../constants';

import githubUsernameRegex from 'github-username-regex';

const SecondSlide = () => {
  const stateCtx = useContext(StateContext);

  // const [stateCtx.firstNameError, stateCtx.setFirstNameError] = useState('');
  // const [stateCtx.lastNameError, stateCtx.setLastNameError] = useState('');
  // const [stateCtx.gitUsernameError, stateCtx.setGitUsernameError] = useState('');

  const setInputHandler = (event, setError, setState) => {
    setError('');

    if (event.target.value.trim(' ') === '') {
      setError('Type something in.');
    }

    if (event.target.value.includes('  ')) {
      setError('Double spaces are not allowed');
    }

    if (prohibitedSigns.some(sign => event.target.value.includes(sign))) {
      setError('Special characters are not allowed');
    }

    if (event.target.value[0] === ' ') {
      setState(event.target.value.substring(1));
      return;
    }

    setState(event.target.value);
  };

  const setgitInputHandler = event => {
    stateCtx.setGitUsernameError('');
    if (!githubUsernameRegex.test(event.target.value)) {
      stateCtx.setGitUsernameError('Invalid github username');
    }
    stateCtx.setGitUsername(event.target.value);
  };

  return (
    <section className={classes.secondSlide}>
      <form className={classes.secondSlide_form} action="">
        <label htmlFor="fName">First Name:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.firstNameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="fName"
          name="firstName"
          //   placeholder="Your name.."
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
            Invalid input! {stateCtx.firstNameError} Please try again.
          </p>
        )}
      </form>

      <form className={classes.secondSlide_form} action="">
        <label htmlFor="lname">Last Name:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.lastNameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="lName"
          name="lastName"
          //   placeholder="Your last name.."
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
            Invalid input! {stateCtx.lastNameError} Please try again.
          </p>
        )}
      </form>

      <form className={classes.secondSlide_form} action="">
        <label htmlFor="gitUsername">Github username:</label>
        <input
          className={`${classes.secondSlide_form_input} ${
            stateCtx.gitUsernameError !== '' &&
            classes.secondSlide_form_invalidInput
          }`}
          type="text"
          id="gitUsername"
          name="githubUsername"
          //   placeholder="Your github username..."
          onChange={setgitInputHandler}
          value={stateCtx.gitUsername}
        />
        {stateCtx.gitUsernameError !== '' && (
          <p className={classes.secondSlide_form_error}>
            Invalid input! {stateCtx.gitUsernameError} Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default SecondSlide;
