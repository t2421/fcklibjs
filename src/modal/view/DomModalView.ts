import ModalView from './ModalView';
const $ = require('jquery');
export default class DomModalView implements ModalView{
    private config:any;
    constructor(config:any){
        this.config = config;
    }

    getView(callback:Function):void{
        const html = $(this.config.src).html();
        setTimeout(()=>{
            $(this).trigger('modalViewLoadComplete');
            callback(html);
        },0);
    }
    show():void{

    }

}