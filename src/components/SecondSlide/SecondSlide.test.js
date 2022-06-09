import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SecondSlide from './SecondSlide';
import StateProvider from '../../store/StateProvider';

const renderComponent = () => (
  <StateProvider>
    <SecondSlide />
  </StateProvider>
);

describe('SecondSlide', () => {
  test('renders error upon special character typed in first name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('firstNameInput');

    // when
    fireEvent.change(input, { target: { value: 'Aleksandra1' } });
    const paragraph = screen.getByTestId('firstNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Special characters are not allowed. Please try again.'
    );
  });

  test('renders error upon double spaces typed in first name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('firstNameInput');

    // when
    fireEvent.change(input, { target: { value: 'Aleksandra  ' } });
    const paragraph = screen.getByTestId('firstNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Multiple spaces are not allowed. Please try again.'
    );
  });

  test('renders error upon single space input in first name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('firstNameInput');

    // when
    fireEvent.change(input, { target: { value: ' ' } });
    const paragraph = screen.getByTestId('firstNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent('Type something in. Please try again.');
  });

  //////////////////////////////////////////////////////////////////////////////////////

  test('renders error upon special character typed in last name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('lastNameInput');

    // when
    fireEvent.change(input, { target: { value: 'Aleksandra1' } });
    const paragraph = screen.getByTestId('lastNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Special characters are not allowed. Please try again.'
    );
  });

  test('renders error upon double spaces typed in last name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('lastNameInput');

    // when
    fireEvent.change(input, { target: { value: 'Aleksandra  ' } });
    const paragraph = screen.getByTestId('lastNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Multiple spaces are not allowed. Please try again.'
    );
  });

  test('renders error upon single space input in last name input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('lastNameInput');

    // when
    fireEvent.change(input, { target: { value: ' ' } });
    const paragraph = screen.getByTestId('lastNameErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent('Type something in. Please try again.');
  });

  //////////////////////////////////////////////////////////////////////////////////////

  test('renders error upon invalid input in github username input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('githubInput');

    // when
    fireEvent.change(input, { target: { value: 'Aleksandra--' } });
    const paragraph = screen.getByTestId('githubErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Invalid Github username. Please try again.'
    );
  });
});
