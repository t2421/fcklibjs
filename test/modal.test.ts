import Modal from '../src/modal/Modal'
import {
  MODAL_SHOW_COMPLETE,
  MODAL_CLOSE_COMPLETE,
  MODAL_CONTENTS,
  MODAL_CLOSE,
  MODAL_WRAPPER
} from '../src/modal/Modal'
import { Info } from '../src/modal/Modal'

const $ = require('jquery')

test('Modal Show test', done => {
  expect.assertions(2)
  const modal = new Modal()
  setHtml()
  $('.js-modal').on('click', function(this: HTMLElement) {
    modal.on(MODAL_SHOW_COMPLETE, () => {
      expect($(`.${MODAL_CONTENTS}`).text()).toBe('Dom Inner')
      done()
    })
    modal.show($(this))
    expect($(`.${MODAL_WRAPPER}`).length).toBe(1)
  })
  $('#modal-3').click()
})

test('Modal Hide test', done => {
  expect.assertions(1)
  const modal = new Modal()
  setHtml()
  $('.js-modal').on('click', function(this: HTMLElement) {
    modal.show($(this))
    $(`.${MODAL_CLOSE}`).click()
  })
  modal.on(MODAL_CLOSE_COMPLETE, () => {
    expect($(`.${MODAL_WRAPPER}`).length).toBe(0)
    done()
  })
  $('#modal-1').click()
})

test('Modal Multi init test', done => {
  expect.assertions(3)
  const modal = new Modal()
  setHtml()
  $('.js-modal').on('click', function(this: HTMLElement) {
    modal.on(MODAL_SHOW_COMPLETE, () => {
      const info: Info = modal.getInfo()
      expect($(`.${MODAL_CONTENTS}`).text()).toBe('Dom Inner2')
      expect(info.numView).toBe(3)
      expect(info.currentIndex).toBe(1)
      done()
    })
    modal.show($(this))
  })
  $('#modal-6').click()
})

test('AjaxModal Show test', done => {
  const modal = new Modal()
  setHtml()
  $('.js-modal').on('click', function(this: HTMLElement) {
    modal.on(MODAL_SHOW_COMPLETE, () => {
      expect($(`.${MODAL_CONTENTS}`).text()).toBe('Bob')
      done()
    })
    modal.show($(this))
    expect($(`.${MODAL_WRAPPER}`).length).toBe(1)
  })
  $('#modal-4').click()
})

function setHtml() {
  document.body.innerHTML = `
  <a href="#" id="modal-1" class="js-modal" data-type="youtube" data-src="hogehoge">youtube</a>
  <a href="#" id="modal-2" class="js-modal" data-type="image" data-src="hogehoge">image</a>
  <a href="#" id="modal-3" class="js-modal" data-type="dom" data-src="#domwrapper">dom</a>
  <a href="#" id="modal-4" class="js-modal" data-type="ajax" data-src="../test.json">ajax</a>
  <a href="#" id="modal-5" class="js-modal" data-group="group1" data-type="ajax" data-src="hogehoge">ajax</a>
  <a href="#" id="modal-6" class="js-modal" data-group="group1" data-type="dom" data-src="#domwrapper2">dom</a>
  <a href="#" id="modal-7" class="js-modal" data-group="group1" data-type="image" data-src="hogehoge">image</a>
  <div id="domwrapper">Dom Inner</div>
  <div id="domwrapper2">Dom Inner2</div>
`
}
