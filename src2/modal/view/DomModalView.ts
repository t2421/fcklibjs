import ModalView from './ModalView';


export default class DomModalView implements ModalView{
    private config;
    constructor(config){
        this.config = config;
    }
    show(){
        console.log("show");
    }

    hide(){
        console.log("hide");
    }
}