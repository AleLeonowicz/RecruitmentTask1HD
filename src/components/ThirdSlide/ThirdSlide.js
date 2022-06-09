import React, { useState, useContext } from 'react';

import classes from './ThirdSlide.module.scss';
import StateContext from '../../store/state-context';
import { validateEmail } from '../../utils';

const ThirdSlide = () => {
  const {
    email,
    setEmail,
    emailError,
    setEmailError,
    fetchData,
    fetchedData,
    gitUsername,
  } = useContext(StateContext);

  const [isChecked, setIsChecked] = useState(false);
  const [checkboxWasClicked, setCheckboxWasClicked] = useState(false);

  const disableSubmit = !isChecked || email === '' || emailError !== '';

  return (
    <section className={classes.thirdSlide}>
      <form
        className={classes.thirdSlide_form}
        onSubmit={event => fetchData(event, gitUsername)}
      >
        <div className={classes.thirdSlide_form_container1}>
          <label className={classes.thirdSlide_form_emailLabel} htmlFor="email">
            E-mail:
          </label>
          <input
            className={`${classes.thirdSlide_form_input} ${
              emailError !== '' && classes.thirdSlide_form_invalidInput
            }`}
            type="email"
            id="email"
            name="email"
            onChange={event => validateEmail(event, setEmailError, setEmail)}
            value={email}
          />
          {emailError !== '' && (
            <p className={classes.thirdSlide_form_error}>{emailError}</p>
          )}
        </div>
        <div className={classes.thirdSlide_form_container2}>
          <input
            type="checkbox"
            id="termsAndServices"
            onChange={() => {
              setIsChecked(!isChecked);
              if (!checkboxWasClicked) {
                setCheckboxWasClicked(true);
              }
            }}
          />
          <label
            className={classes.thirdSlide_form_checkboxLabel}
            htmlFor="termsAndServices"
          >
            I agree with terms and services
          </label>
          {!isChecked && checkboxWasClicked && (
            <p>Please agree to terms and services before submiting.</p>
          )}
        </div>
        <div className={classes.thirdSlide_form_container3}>
          <input
            className={`${classes.thirdSlide_form_submitBtn} ${
              disableSubmit && classes.thirdSlide_form_submitBtn_disabled
            }`}
            type="submit"
            value="Submit"
            disabled={disableSubmit}
          />
          {fetchedData.message && (
            <p className={classes.thirdSlide_form_error}>
              No Github account matching your query found. Please go back and
              try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ThirdSlide;
