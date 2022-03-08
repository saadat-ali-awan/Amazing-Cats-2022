import ItemsCounter from './items_counter.js';

test('empty array', () => {
  expect(ItemsCounter([])).toBe(0);
});

test('Array With Elements', () => {
  expect(ItemsCounter([{ name: 'Josh' }, { name: 'Wildey' }])).toBe(2);
});

test('Undefined Array Test', () => {
  expect(() => { ItemsCounter(); }).toThrowError('Undefined Array Passed');
});
