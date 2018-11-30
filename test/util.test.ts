import Util from '../src/util/Util'

test('Util test', () => {
  const url: Object = Util.getUrlParam('https://yahoo.co.jp?hogehoge=10&hogehoge2=30#anchor')
  expect(url['hogehoge']).toBe('10')
  expect(url['hogehoge2']).toBe('30')
})
