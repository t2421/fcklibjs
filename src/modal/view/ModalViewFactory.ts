import ModalView from './ModalView';
import DomModalView from './DomModalView';
const $ = require('jquery');

export default class ModalViewFactory{
    
    static createConfig(dom:JQuery){
        var config:any = {};
        if(dom.data('group')){
            config = {
                "group":dom.data("group"),
                "list":[]
            }
            let list:JQuery = $(`[data-group=${dom.data('group')}]`);
            list.each((el,index)=> {
                let childConfig = {
                    "type":dom.data('type'),
                    "src":dom.data('src')
                }
                config["list"].push(childConfig)
            })
           
            return config;
        }else{
            config = {
                "type":dom.data('type'),
                "src":dom.data('src')
            }
        }
        return config;
    }

    static create(dom:JQuery):ModalView{
        const config = ModalViewFactory.createConfig(dom);
        return ModalViewFactory.createView(config);

    }
    static createView(config:any):ModalView{
        return new DomModalView(config);
    }
}