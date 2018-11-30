import MathUtil from '../src/math/MathUtil'

test('MathUtil test', () => {
  expect(MathUtil.map(100, 0, 100, 0, 200)).toBe(200)
  expect(MathUtil.map(50, 0, 100, 0, 200)).toBe(100)

  expect(MathUtil.toDegree(Math.PI)).toBe(180)
  expect(MathUtil.toDegree(2 * Math.PI)).toBe(360)

  expect(MathUtil.toRadian(360)).toBe(2 * Math.PI)
  expect(MathUtil.toRadian(180)).toBe(Math.PI)
})
