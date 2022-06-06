import React from 'react';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = () => {
  return (
    <section className={classes.thirdSlide}>
      <form className={classes.thirdSlide_form} action="">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          //   placeholder="Your e-mail address..."
        />
        <div className={classes.thirdSlide_form_container}>
          <input type="checkbox" id="termsAndServices" value="" />
          <label htmlFor="termsAndServices">
            I agree with terms and services
          </label>
        </div>
        <input
          className={classes.thirdSlide_form_submitBtn}
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
};

export default ThirdSlide;
