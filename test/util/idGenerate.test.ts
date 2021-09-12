import { generateId } from '../../src/util';

test('id生成のテスト', () => {
  const qty = 1000;
  const ids: Set<string> = new Set();
  for (let i = 0; i < qty; i++) {
    ids.add(generateId());
  }
  expect(ids.size).toBe(qty);
});
