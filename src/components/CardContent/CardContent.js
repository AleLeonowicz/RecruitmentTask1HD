import React from 'react';
import classes from './CardContent.module.scss';
// import forwardBtn from '../../assets/svg/chevron-forward-outline.svg';
// import backBtn from '../../assets/svg/chevron-back-outline.svg';

const CardContent = () => {
  return (
    <section className={classes.carousel} aria-label="Gallery">
      <ol className={classes.carousel__viewport}>
        <li
          id="carousel__slide1"
          tabIndex="0"
          className={classes.carousel__slide}
        >
          <div className={classes.carousel__snapper}></div>
          <a href="#carousel__slide4" className={classes.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide2" className={classes.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li
          id="carousel__slide2"
          tabIndex="0"
          className={classes.carousel__slide}
        >
          <div className={classes.carousel__snapper}></div>
          <a href="#carousel__slide1" className={classes.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide3" className={classes.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li
          id="carousel__slide3"
          tabIndex="0"
          className={classes.carousel__slide}
        >
          <div className={classes.carousel__snapper}></div>
          <a href="#carousel__slide2" className={classes.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide4" className={classes.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li
          id="carousel__slide4"
          tabIndex="0"
          className={classes.carousel__slide}
        >
          <div className={classes.carousel__snapper}></div>
          <a href="#carousel__slide3" className={classes.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide1" className={classes.carousel__next}>
            Go to first slide
          </a>
        </li>
      </ol>
      <aside className={classes.carousel__navigation}>
        <ol className={classes.carousel__navigation__list}>
          <li className={classes.carousel__navigation__item}>
            <a
              href="#carousel__slide1"
              className={classes.carousel__navigation__button}
            >
              Go to slide 1
            </a>
          </li>
          <li className={classes.carousel__navigation__item}>
            <a
              href="#carousel__slide2"
              className={classes.carousel__navigation__button}
            >
              Go to slide 2
            </a>
          </li>
          <li className={classes.carousel__navigation__item}>
            <a
              href="#carousel__slide3"
              className={classes.carousel__navigation__button}
            >
              Go to slide 3
            </a>
          </li>
          <li className={classes.carousel__navigation__item}>
            <a
              href="#carousel__slide4"
              className={classes.carousel__navigation__button}
            >
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
};

export default CardContent;
