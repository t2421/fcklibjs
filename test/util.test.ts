import Util from '../src/util/Util'

test('Util test', done => {
  Util.getUrlParam('https://yahoo.co.jp?hogehoge=10&hogehoge2=30#anchor')
})
