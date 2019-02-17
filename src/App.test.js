import { total, reducedTotal } from './App';
import { add } from './add';

// Import Mocking
// If you don't have access to the interal function that the function you're trying to test depends on,
// you intercept that import and and set it's value through the following code

jest.mock('./add', () => ({
  add: jest.fn(() => 25)
}));

const mockAdd = jest.fn(() => 3);

// Intergration Test
// Tests a block of code that relies on another block of code as well

test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  add.mockImplementation(() => 30);

  expect(total(5, 25)).toBe('$30');
});

// Mocking Functions

test('Mock Add', () => {
  expect(mockAdd()).toBe(3);
});
