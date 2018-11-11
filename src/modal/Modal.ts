import ModalView from './view/ModalView';
import ModalViewFactory from './view/ModalViewFactory';
import Loading from './Loading';
import {EventEmitter} from 'events';

const $ = require('jquery');
export default class Modal extends EventEmitter{
    private modalView!:ModalView;
    private loading:Loading = new Loading();
    constructor(){
        super();
    }
    
    show(dom:JQuery){
        this.emit("modalShowStart");
        this.modalView = ModalViewFactory.create(dom);
        $('body').append(this._getContainer());
        
        $(document).on('click','.modal__close',(e:Event)=>{
            this.hide();
        })
        
        this.setView();
        
    }

    private async setView(){
        
        $('.modal__body').append(this.loading.getHtml());        
        const html = await this.modalView.getView();
        $('.modal__contents').html(html);
        
        this.loading.remove();
        this.emit("modalShowComplete");
        
    }

    hide(){
        this.emit("modalCloseStart");
        setTimeout(()=>{
            $('.modal-window').remove();
            this.emit("modalCloseComplete");
        },0)
    }
    
   
    private _getContainer():string{
        var html = `
		<div class="modal-window">
            <div class="modal__body">
                <a href="#" class="modal__close">close</a>
				<div class="modal__contents"></div>
			</div>
		</div>`;
		return html;
    }
}