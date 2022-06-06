import { prohibitedSigns } from '../constants';
import githubUsernameRegex from 'github-username-regex';

export const goToHomePage = () => {
  window.location.href = window.location.origin;
};

////////////////////////////////////////////////////////////////////////

export const setInputHandler = (event, setError, setState) => {
  setError('');
  if (event.target.value.trim(' ') === '') {
    setError('Type something in.');
  }

  if (event.target.value.includes('  ')) {
    setError('Multiple spaces are not allowed.');
  }

  if (prohibitedSigns.some(sign => event.target.value.includes(sign))) {
    setError('Special characters are not allowed.');
  }

  if (event.target.value[0] === ' ') {
    setState(event.target.value.substring(1));
    return;
  }

  setState(event.target.value);
};

////////////////////////////////////////////////////////////////////////

export const setgitInputHandler = (event, setError, setState) => {
  setError('');
  if (!githubUsernameRegex.test(event.target.value)) {
    setError('Invalid Github username.');
  }
  setState(event.target.value);
};

////////////////////////////////////////////////////////////////////////

export const validateEmail = (event, setError, setState) => {
  setError('');
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
  ) {
    setError('Please type in a correct e-mail address and try again.');
  }
  setState(event.target.value);
};
