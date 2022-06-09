import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import MainSection from './MainSection';
import StateProvider from '../../store/StateProvider';
/////////////////////////////////////////////////////////////////////

const githubUserMock = {
  login: 'AleLeonowicz',
  id: 94448459,
  node_id: 'U_kgDOBaErSw',
  avatar_url: 'https://avatars.githubusercontent.com/u/94448459?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/AleLeonowicz',
  html_url: 'https://github.com/AleLeonowicz',
  followers_url: 'https://api.github.com/users/AleLeonowicz/followers',
  following_url:
    'https://api.github.com/users/AleLeonowicz/following{/other_user}',
  gists_url: 'https://api.github.com/users/AleLeonowicz/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/AleLeonowicz/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/AleLeonowicz/subscriptions',
  organizations_url: 'https://api.github.com/users/AleLeonowicz/orgs',
  repos_url: 'https://api.github.com/users/AleLeonowicz/repos',
  events_url: 'https://api.github.com/users/AleLeonowicz/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/AleLeonowicz/received_events',
  type: 'User',
  site_admin: false,
  name: 'Aleksandra Leonowicz',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 29,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2021-11-16T10:40:03Z',
  updated_at: '2022-06-06T09:46:47Z',
};

const renderComponent = () => (
  <StateProvider>
    <MainSection />
  </StateProvider>
);

/////////////

const server = setupServer(
  rest.get('https://api.github.com/users/AleLeonowicz', (req, res, ctx) => {
    // console.log('req', req);
    return res(ctx.json(githubUserMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/////////////

describe('MainSection', () => {
  test('renders last page of the application with github user data after successful submission', async () => {
    // given
    render(renderComponent());
    const nextBtn = screen.getByTestId('nextBtn');
    fireEvent.click(nextBtn);

    const firstNameInput = screen.getByTestId('firstNameInput');
    const lastNameInput = screen.getByTestId('lastNameInput');
    const githubInput = screen.getByTestId('githubInput');

    //when
    fireEvent.change(firstNameInput, { target: { value: 'Aleksandra' } });
    fireEvent.change(lastNameInput, { target: { value: 'Leonowicz' } });
    fireEvent.change(githubInput, { target: { value: 'AleLeonowicz' } });
    fireEvent.click(nextBtn);

    const emailInput = screen.getByTestId('emailInput');
    const checkboxInput = screen.getByTestId('checkboxInput');
    const submitBtn = screen.getByTestId('submitBtn');

    fireEvent.change(emailInput, {
      target: { value: 'ale.leonowicz@gmail.com' },
    });

    fireEvent.click(checkboxInput);

    fireEvent.click(submitBtn);

    await waitFor(() => screen.getByTestId('githubUserInfoPage'));
    const githubUserInfoPage = screen.getByTestId('githubUserInfoPage');

    // then
    expect(githubUserInfoPage).toBeInTheDocument();
  });

  test('renders the initial card after klicking on "here" button', async () => {
    // given
    render(renderComponent());
    const nextBtn = screen.getByTestId('nextBtn');
    fireEvent.click(nextBtn);

    const firstNameInput = screen.getByTestId('firstNameInput');
    const lastNameInput = screen.getByTestId('lastNameInput');
    const githubInput = screen.getByTestId('githubInput');

    //when
    fireEvent.change(firstNameInput, { target: { value: 'Aleksandra' } });
    fireEvent.change(lastNameInput, { target: { value: 'Leonowicz' } });
    fireEvent.change(githubInput, { target: { value: 'AleLeonowicz' } });
    fireEvent.click(nextBtn);

    const emailInput = screen.getByTestId('emailInput');
    const checkboxInput = screen.getByTestId('checkboxInput');
    const submitBtn = screen.getByTestId('submitBtn');

    fireEvent.change(emailInput, {
      target: { value: 'ale.leonowicz@gmail.com' },
    });

    fireEvent.click(checkboxInput);
    fireEvent.click(submitBtn);

    await waitFor(() => screen.getByTestId('githubUserInfoPage'));
    const goBackToInitialCardBtn = screen.getByTestId('goBackToInitialCardBtn');

    fireEvent.click(goBackToInitialCardBtn);
    // then
    const initialCard = screen.getByTestId('initialCard');
    expect(initialCard).toBeInTheDocument();
  });
});
