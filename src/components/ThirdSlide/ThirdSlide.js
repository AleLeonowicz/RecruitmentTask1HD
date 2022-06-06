import React, { useState, useContext } from 'react';
import classes from './ThirdSlide.module.scss';
import StateContext from '../../store/state-context';
import { validateEmail } from '../../utils';

const ThirdSlide = () => {
  const stateCtx = useContext(StateContext);
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxWasClicked, setCheckboxWasClicked] = useState(false);

  const disableSubmit =
    !isChecked || stateCtx.email === '' || stateCtx.emailError !== '';

  const checkFormInputHandler = event => {
    event.preventDefault();
    console.log('fetchData()');
  };

  return (
    <section className={classes.thirdSlide}>
      <form className={classes.thirdSlide_form} action="">
        <div className={classes.thirdSlide_form_container1}>
          <label htmlFor="email">E-mail:</label>
          <input
            className={`${classes.thirdSlide_form_input} ${
              stateCtx.emailError !== '' && classes.thirdSlide_form_invalidInput
            }`}
            type="email"
            id="email"
            name="email"
            onChange={event =>
              validateEmail(event, stateCtx.setEmailError, stateCtx.setEmail)
            }
            value={stateCtx.email}
          />
          {stateCtx.emailError !== '' && (
            <p className={classes.thirdSlide_form_error}>
              {stateCtx.emailError}
            </p>
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
          <label htmlFor="termsAndServices">
            I agree with terms and services
          </label>
          {!isChecked && checkboxWasClicked && (
            <p>Please agree to terms and services before submiting.</p>
          )}
        </div>
        <input
          className={`${classes.thirdSlide_form_submitBtn} ${
            disableSubmit && classes.thirdSlide_form_submitBtn_disabled
          }`}
          type="submit"
          value="Submit"
          // onClick={!isChecked && () => setRenderTermsErr(true)}
          onSubmit={checkFormInputHandler}
          disabled={disableSubmit}
        />
      </form>
    </section>
  );
};

export default ThirdSlide;
