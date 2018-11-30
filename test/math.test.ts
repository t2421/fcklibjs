import MathUtil from '../src/math/MathUtil'

test('MathUtil test', () => {
  expect(MathUtil.map(100, 0, 100, 0, 200)).toBe(200)
  expect(MathUtil.map(50, 0, 100, 0, 200)).toBe(100)
})
