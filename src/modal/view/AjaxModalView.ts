import ModalView from './ModalView';
import axios from 'axios';

const $ = require('jquery');
export default class AjaxModalView implements ModalView{
    private config:any;
    constructor(config:any){
        this.config = config;
    }

    getView():Promise<string>{
        
        return new Promise(
        (resolve: (value?:string) => void, reject: () => void) => {
            
            axios
            .get(this.config.src)
            .then((res:any) => {
               console.log(res.data);
                const html = this.getHtml(res.data);
                resolve(html);
            })
            .catch((error:any) => {
                
                resolve("error");
            })
            console.log("call")
        });
    }

    private getHtml(data:any):string{
        return `${data.name}`;
    }
}