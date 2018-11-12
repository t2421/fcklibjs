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
            const html = $(this.config.src).html();
            setTimeout(()=>{
                resolve(html);
            },0);
        });
    }
}