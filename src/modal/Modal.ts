import ModalView from './view/ModalView'
import ModalViewFactory from './view/ModalViewFactory'
import Loading from './Loading'
import { EventEmitter } from 'events'

const $ = require('jquery')
export default class Modal extends EventEmitter {
  protected _modalViewList: Array<ModalView> = []
  protected _loading: Loading = new Loading()
  protected _currentIndex: number = 0

  constructor() {
    super()
  }

  public show(dom: JQuery) {
    this.emit('modalShowStart')
    const config = ModalViewFactory.createConfig(dom)

    if (config.group) {
      $(`[data-group=${config.group}]`).each((index: number, el: HTMLElement) => {
        let groupConfig = ModalViewFactory.createConfig($(el))
        if ($(el).is(dom)) {
          this._currentIndex = index
        }
        this._modalViewList.push(ModalViewFactory.createView(groupConfig))
      })
    } else {
      this._modalViewList.push(ModalViewFactory.createView(config))
    }

    $('body').append(this._getContainer())

    $(document).on('click', '.modal__close', (e: Event) => {
      this.hide()
    })
    $(document).on('click', '.modal-window', (e: Event) => {
      if (e.currentTarget === e.target) {
        this.hide()
      }
    })
    $(window).on('resize.fcklibjs:modal', e => {
      this._resize($(window).width(), $(window).height())
    })

    this._setView()
  }

  public hide() {
    this.emit('modalCloseStart')
    this._hideBehavior()
  }

  public getInfo(): Info {
    return {
      numView: this._modalViewList.length,
      currentIndex: this._currentIndex
    }
  }
  private _setViewItemList(isGroup: boolean): void {}
  private async _setView() {
    $('.modal__body').append(this._loading.getHtml())
    this.emit('modalViewInitStart')
    const html = await this._modalViewList[this._currentIndex].getView()
    this.emit('modalViewInitComplete')
    $('.modal__contents').html(html)
    this._loading.remove()
    this._resize(0, $(window).height())
    setTimeout(() => {
      this.emit('modalShowComplete')
    }, 200)
  }

  protected _hideBehavior() {
    setTimeout(() => {
      this._destroy()
    }, 100)
  }
  protected _destroy() {
    $('.modal-window').remove()
    this._modalViewList = []
    this.emit('modalCloseComplete')
  }

  private _getContainer(): string {
    var html = `
		<div class="modal-window">
            <div class="modal__body">
                <a href="#" class="modal__close">close</a>
				<div class="modal__contents"></div>
			</div>
		</div>`
    return html
  }

  private _resize(w: Number = 0, h: Number = 0) {
    this._isOverflowHeight(h)
  }
  private _isOverflowHeight(h: Number) {
    if ($('.modal__body').outerHeight() > $(window).height()) {
      $('html').addClass('is-modal-overflow-window')
      return true
    } else {
      $('html').removeClass('is-modal-overflow-window')
      return false
    }
  }
}

export interface Info {
  numView: number
  currentIndex: number
}
