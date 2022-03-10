import CCounter from './comments_counter.js';

it('returns nothing', () => {
  expect(CCounter([])).toBe(0);
});

it('returns three', () => {
  expect(CCounter(['cat-1', 'cat-2', 'cat-3'])).toBe(3);
});

it('throws an error', () => {
  expect(() => { CCounter(); }).toThrowError('Undefined Number of comments');
});