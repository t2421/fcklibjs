import ModalView from './view/ModalView';
import ModalViewFactory from './view/ModalViewFactory';
const $ = require('jquery');
export default class Modal{
    private modalView!:ModalView;
   
    constructor(){
       
    }
    
    show(dom:JQuery){
        this.modalView = ModalViewFactory.create(dom);
        $('body').append(this._getContainer());
        
        $(document).on('click','.modal__close',(e:Event)=>{
            this.hide();
        })
        this.modalView.getView((data:string)=>{
            $('.modal__contents').html(data);
            $(this).trigger("modalShowComplete");
        });
    }
    hide(){
        $('.modal-window').remove();
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