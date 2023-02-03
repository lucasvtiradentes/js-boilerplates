import { expect, it } from '@jest/globals';

it('should sum correctly: 1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});

it('should detect an error sum: 1 + 2 != 2', () => {
  expect(1 + 2).not.toBe(2);
});
