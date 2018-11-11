const $ = require("jquery")
export default class Loading{
    private html:string = ``;
    constructor(){
        this.html = `
        <div class="modal__loading></div>
        `;
    }
    getHtml():string{
        return this.html;
    }
    remove():void{
        $('.modal__loading').remove();
    }
}