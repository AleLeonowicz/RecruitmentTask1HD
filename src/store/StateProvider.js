import React, { useState } from 'react';

import StateContext from './state-context';

const StateProvider = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gitUsername, setGitUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [gitUsernameError, setGitUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fetchedData, setFetchedData] = useState({});

  const fetchData = async (event, githubUsername) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUsername}`
      );

      const data = await response.json();

      console.log('data', data);
      setFetchedData(data);
    } catch (err) {}
  };

  const stateContext = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    gitUsername: gitUsername,
    setGitUsername: setGitUsername,
    email: email,
    setEmail: setEmail,
    isAgreed: isAgreed,
    setIsAgreed: setIsAgreed,
    firstNameError: firstNameError,
    setFirstNameError: setFirstNameError,
    lastNameError: lastNameError,
    setLastNameError: setLastNameError,
    gitUsernameError: gitUsernameError,
    setGitUsernameError: setGitUsernameError,
    emailError: emailError,
    setEmailError: setEmailError,
    fetchData: fetchData,
    fetchedData: fetchedData,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
