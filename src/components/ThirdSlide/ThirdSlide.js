import React from 'react';
import classes from './ThirdSlide.module.scss';

import illustration from '../../assets/png/FormIcon.png';

const ThirdSlide = () => {
  return (
    <section className={classes.thirdSlide}>
      <form className={classes.thirdSlide_form} action="">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          //   placeholder="Your e-mail address..."
        />
        <div className={classes.thirdSlide_form_container}>
          <input type="checkbox" id="termsAndServices" value="" />
          <label for="termsAndServices">I agree with terms and services</label>
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
