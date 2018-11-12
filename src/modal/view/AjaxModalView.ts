import ModalView from './ModalView';
import axiosbase from 'axios';
const axios = axiosbase.create({
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
})

const $ = require('jquery');
export default class AjaxModalView implements ModalView{
    private config:any;
    constructor(config:any){
        this.config = config;
        console.log(__dirname);
    }

    getView():Promise<string>{
        return new Promise(
        (resolve: (value?:string) => void, reject: () => void) => {
            axios
            .get(this.config.src)
            .then(res => {
                const html = this.getHtml(res.data);
                resolve(html);
            })
            .catch(error => {
                resolve("error");
            })

        });
    }

    private getHtml(data:any):string{
        return `
            <div>${data.test}</div>
        `;
    }
}