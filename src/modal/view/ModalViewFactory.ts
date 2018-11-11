import ModalView from './ModalView';
import DomModalView from './DomModalView';

export default class ModalViewFactory{
    static createConfig(dom:HTMLElement){
        var config:any = {};
        if(dom.dataset["group"]){
            config = {
                "group":dom.dataset["group"],
                "list":[]
            }
            let nodeList:NodeList = document.querySelectorAll(`[data-group=${dom.dataset["group"]}]`);
            nodeList.forEach(element =>{
                let dom:HTMLElement = element as HTMLElement;
                let childConfig = {
                    "type":dom.dataset["type"],
                    "src":dom.dataset["src"]
                }
                config["list"].push(childConfig)
            })
            return config;
        }else{
            config = {
                "type":dom.dataset["type"],
                "src":dom.dataset["src"]
            }
        }
        return config;
    }
    
    static create(dom:HTMLElement){
        const config = ModalViewFactory.createConfig(dom);
        return ModalViewFactory.createView(config);

    }
    static createView(config:Object):ModalView{
        return new DomModalView(config);
    }
}