import React, { useState } from 'react';

import StateContext from './state-context';

const StateProvider = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gitUsername, setGitUsername] = useState('');
  const [email, setemail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

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
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
