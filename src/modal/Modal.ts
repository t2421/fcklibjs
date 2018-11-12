import ModalView from './view/ModalView';
import ModalViewFactory from './view/ModalViewFactory';
import Loading from './Loading';
import {EventEmitter} from 'events';
import axiosbase from 'axios';


const $ = require('jquery');
export default class Modal extends EventEmitter{
    private modalViewList:Array<ModalView>=[];
    private loading:Loading = new Loading();
    private currentIndex:number = 0;

    constructor(){
        super();
    }
    
    show(dom:JQuery){
        this.emit("modalShowStart");
        const config = ModalViewFactory.createConfig(dom);

        if(config.group){
            $(`[data-group=${config.group}]`).each((index:number,el:HTMLElement)=>{
               let groupConfig = ModalViewFactory.createConfig($(el));
               if($(el).is(dom)){
                   this.currentIndex = index;
               }
               this.modalViewList.push(ModalViewFactory.createView(groupConfig));
            });
        }else{
            this.modalViewList.push(ModalViewFactory.createView(config));
        }
        
        
        $('body').append(this._getContainer());
        
        $(document).on('click','.modal__close',(e:Event)=>{
            this.hide();
        })
        
        this.setView();
    }

    private async setView(){
        
        $('.modal__body').append(this.loading.getHtml());        
        const html = await this.modalViewList[this.currentIndex].getView();
        $('.modal__contents').html(html);
        this.loading.remove();
        this.emit("modalShowComplete");
        
    }

    hide(){
        this.emit("modalCloseStart");
        setTimeout(()=>{
            $('.modal-window').remove();
            this.modalViewList = [];
            this.emit("modalCloseComplete");
        },0)
    }
    
    
    getInfo():Info {
        return {
            "numView":this.modalViewList.length,
            "currentIndex":this.currentIndex
        }
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



export interface Info {
    numView: number;
    currentIndex: number;
}