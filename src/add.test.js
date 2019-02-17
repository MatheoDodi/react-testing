import { add } from './add';

// Unit Test
// Tests only one thing, hence, unit test

test('Add', () => {
  expect(add(1, 2)).toBe(3);
});
