import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ThirdSlide from './ThirdSlide';
import StateProvider from '../../store/StateProvider';

const renderComponent = () => (
  <StateProvider>
    <ThirdSlide />
  </StateProvider>
);

describe('ThirdSlide', () => {
  test('renders error upon invalid input in email input field', () => {
    // given
    render(renderComponent());

    const input = screen.getByTestId('emailInput');

    // when
    fireEvent.change(input, { target: { value: 'ale.leonowicz@gmail.com1' } });
    const paragraph = screen.getByTestId('emailErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Please type in a correct e-mail address and try again.'
    );
  });

  //////////////////////////////////////////////

  test('checkbox error is not rendered by default ', () => {
    // given
    render(renderComponent());
    const paragraph = screen.queryByText(
      'Please agree to terms and services before submiting.'
    );

    // when

    // then
    expect(paragraph).toBeNull();
  });

  //////////////////////////////////////////////

  test('checkbox error is rendered when checkbox was checked and unchecked', () => {
    // given
    render(renderComponent());
    const input = screen.getByTestId('checkboxInput');

    // when
    fireEvent.click(input);
    fireEvent.click(input);
    const paragraph = screen.getByTestId('checkboxErrorParagraph');

    // then
    expect(paragraph).toHaveTextContent(
      'Please agree to terms and services before submiting.'
    );
  });

  //////////////////////////////////////////////

  test('submit button has property disabled set to true by default', () => {
    // given
    render(renderComponent());
    const submitBtn = screen.getByTestId('submitBtn');

    // when

    // then
    expect(submitBtn).toBeDisabled();
  });

  //////////////////////////////////////////////

  test('submit button has property disabled set to false when email input is valid and checkbox is checked', () => {
    // given
    render(renderComponent());
    const emailInput = screen.getByTestId('emailInput');
    const checkboxInput = screen.getByTestId('checkboxInput');
    const submitBtn = screen.getByTestId('submitBtn');

    // when
    fireEvent.change(emailInput, {
      target: { value: 'ale.leonowicz@gmail.com' },
    });
    fireEvent.click(checkboxInput);

    // then
    expect(submitBtn).not.toBeDisabled();
  });
});
