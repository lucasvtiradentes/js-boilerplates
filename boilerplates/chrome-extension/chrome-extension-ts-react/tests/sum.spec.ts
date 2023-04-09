import { test, expect } from '@jest/globals';

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

test("1 + 2 != 2", () => {
  expect(1 + 1).not.toBe(2);
});
