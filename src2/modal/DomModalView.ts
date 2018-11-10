import ModalView from './ModalView';

export default class DomModalView implements ModalView{
    constructor(){
        
    }
    show(){
        console.log("show");
    }

    hide(){
        console.log("hide");
    }
}