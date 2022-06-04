import React from 'react';
import classes from './SecondSlide.module.scss';

import illustration from '../../assets/png/FormIcon.png';

const SecondSlide = () => {
  return (
    <section className={classes.secondSlide}>
      <form className={classes.secondSlide_form} action="">
        <label for="fName">First Name</label>
        <input
          type="text"
          id="fName"
          name="firstName"
          //   placeholder="Your name.."
        />
      </form>

      <form className={classes.secondSlide_form} action="">
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lName"
          name="lastName"
          //   placeholder="Your last name.."
        />
      </form>

      <form className={classes.secondSlide_form} action="">
        <label for="gitUsername">Github username</label>
        <input
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

{
  /* <input
        className={classes.secondSlide_input}
        type="text"
        id="first_name"
        placeholder="First Name"
      ></input> */
}
