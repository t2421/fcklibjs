import ModalView from './ModalView';
const $ = require('jquery');
export default class DomModalView implements ModalView{
    private config:any;
    constructor(config:any){
        this.config = config;
    }

    getView():Promise<string>{
        
        return new Promise(
        (resolve: (value?:string) => void, reject: () => void) => {
            console.log(this)
            const html = $(this.config.src).html();
            
            setTimeout(()=>{
                
                $(this).trigger('modalViewLoadComplete');
                resolve(html);
            },0);
        });
    }
    
    show():void{

    }

}