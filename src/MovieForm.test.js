import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { queryByTestId, getByLabelText, getByText } = render(
    <MovieForm submitForm={onSubmit} />
  );
  expect(queryByTestId('movie-form')).toBeTruthy();

  const formInput = getByLabelText('Text');
  formInput.value = 'Hello';
  fireEvent.change(formInput);

  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'Hello'
  });
});
