import ModalView from './ModalView';
import ModalViewFactory from './ModalViewFactory';

export default class Modal{
    private modalView:ModalView;
    constructor(){
        this.modalView = ModalViewFactory.create();
    }
}