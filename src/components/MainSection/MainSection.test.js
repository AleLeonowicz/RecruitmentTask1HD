import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import GithubUserInfo from './GithubUserInfo';
import StateProvider from '../../store/StateProvider';

const renderComponent = () => (
  <StateProvider>
    <GithubUserInfo />
  </StateProvider>
);

describe('GithubUserInfo', () => {
  test('');
});
