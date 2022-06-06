import React, { useState } from 'react';

import StateContext from './state-context';

const StateProvider = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gitUsername, setGitUsername] = useState('');
  const [email, setemail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [gitUsernameError, setGitUsernameError] = useState('');

  const stateContext = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    gitUsername: gitUsername,
    setGitUsername: setGitUsername,
    email: email,
    setemail: setemail,
    isAgreed: isAgreed,
    setIsAgreed: setIsAgreed,
    firstNameError: firstNameError,
    setFirstNameError: setFirstNameError,
    lastNameError: lastNameError,
    setLastNameError: setLastNameError,
    gitUsernameError: gitUsernameError,
    setGitUsernameError: setGitUsernameError,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
