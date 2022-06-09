import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import Card from './Card';
import StateProvider from '../../store/StateProvider';
/////////////////////////////////////////////////////////////////////

const renderComponent = () => (
  <StateProvider>
    <Card />
  </StateProvider>
);

describe.skip('CardContent', () => {
  test('sets button attribute disabled to true when first name, last name, and github username input fields are filled with incorrect data', () => {
    //given
    render(renderComponent());
    act(() => {
      const nextBtn = screen.getByTestId('nextBtn');

      fireEvent.click(nextBtn);
    });

    const firstNameInput = screen.getByTestId('firstNameInput');
    const lastNameInput = screen.getByTestId('lastNameInput');
    const githubInput = screen.getByTestId('githubInput');

    //when
    fireEvent.change(firstNameInput, { target: { value: 'Aleksandra1' } });
    fireEvent.change(lastNameInput, { target: { value: 'Leonowicz  ' } });
    fireEvent.change(githubInput, { target: { value: 'AleLeonowicz--' } });
    //then
    expect(nextBtn).toHaveAttribute('disabled');
  });
});
