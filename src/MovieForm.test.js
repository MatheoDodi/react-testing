import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <MovieForm submitForm={onSubmit} />
  );

  debug();
  expect(queryByTestId('movie-form')).toBeTruthy();

  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
