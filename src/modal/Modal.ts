import ModalView from './view/ModalView';
import ModalViewFactory from './view/ModalViewFactory';
import Loading from './Loading';

const $ = require('jquery');
export default class Modal{
    private modalView!:ModalView;
    private loading:Loading = new Loading();
    constructor(){
        
    }
    
    show(dom:JQuery){
       
        this.modalView = ModalViewFactory.create(dom);
        $('body').append(this._getContainer());
        
        $(document).on('click','.modal__close',(e:Event)=>{
            this.hide();
        })
        
        this.setView();
    }

    private async setView(){
       
        $('.modal__body').append(this.loading.getHtml());
        console.log("callll")
        
        const html = await this.modalView.getView();
        $('.modal__contents').html(html);
        
        this.loading.remove();
        
        $(this).trigger("modalShowComplete");
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