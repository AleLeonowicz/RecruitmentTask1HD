import React, { useContext, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StateContext from '../../store/state-context';

import classes from './CardContent.module.scss';
import arrowForward from '../../assets/svg/chevron-forward-outline.svg';
import arrowBack from '../../assets/svg/chevron-back-outline.svg';
// import circle from '../../assets/svg/ellipse-outline.svg';

import FirstSlide from '../FirstSlide/FirstSlide';
import SecondSlide from '../SecondSlide/SecondSlide';
import ThirdSlide from '../ThirdSlide/ThirdSlide';
import FourthSlide from '../FourthSlide/FourthSlide';

//////////////////////////////////////////////////////////////////////////

const CardContent = () => {
  const stateCtx = useContext(StateContext);
  const [, setCurrentSlide] = useState(undefined);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 220 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    const disableNextSlide =
      (currentSlide === 1 &&
        (stateCtx.firstName === '' ||
          stateCtx.lastName === '' ||
          stateCtx.gitUsername === '')) ||
      stateCtx.firstNameError !== '' ||
      stateCtx.lastNameError !== '' ||
      stateCtx.gitUsernameError !== '';

    return (
      <div className={classes.carouselContainer_buttonGroup}>
        <button
          className={
            currentSlide === 0
              ? classes.carouselContainer_buttonLeft_hidden
              : classes.carouselContainer_buttonLeft
          }
          onClick={() => {
            console.log('currentSlide', currentSlide);
            setCurrentSlide(currentSlide);
            previous();
          }}
        >
          <img src={arrowBack} alt="Go to previous slide" />
        </button>
        <button
          className={`
            ${
              currentSlide === 3
                ? classes.carouselContainer_buttonRight_hidden
                : classes.carouselContainer_buttonRight
            } ${
            disableNextSlide && classes.carouselContainer_buttonRight_disabled
          }
          `}
          onClick={() => {
            console.log('currentSlide', currentSlide);
            setCurrentSlide(currentSlide);
            next();
          }}
          disabled={disableNextSlide}
        >
          <img src={arrowForward} alt="Go to next slide" />
        </button>
      </div>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      containerClass={classes.carouselContainer}
      autoPlay={false}
      autoPlaySpeed={10000000}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      swipeable={false}
      draggable={false}
      keyBoardControl={false}
    >
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
    </Carousel>
  );
};

export default CardContent;
