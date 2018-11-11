import ModalView from './view/ModalView';
import ModalViewFactory from './view/ModalViewFactory';

export default class Modal{
    private modalView!:ModalView;

    constructor(){
        
    }
    
    show(dom:HTMLElement){
        this.modalView = ModalViewFactory.create(dom)
    }
    hide(){

    }
    getView(dom:HTMLElement){
        
    }
}