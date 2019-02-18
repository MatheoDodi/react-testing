import React from 'react';
import { render, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug, getByTestId, queryByTestId } = render(<NewMovie />);
  const newMovie = getByTestId('new-movie');

  debug();

  expect(newMovie.textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
});
