import ModalView from './ModalView';
import DomModalView from './DomModalView';


export default class ModalViewFactory{
    static createConfig(dom:HTMLElement){
        if(dom.dataset["group"]){
            let config = {
                "group":dom.dataset["group"],
                "list":[]
            }
            let nodeList:NodeList = document.querySelectorAll(`[data-group=${dom.dataset["group"]}]`);
            nodeList.forEach(element =>{
                let dom:HTMLElement = element as HTMLElement;
                config.list.push({
                    "type":dom.dataset["type"],
                    "src":dom.dataset["src"]
                })
            })
        }
        return {
            "type":dom.dataset["type"],
            "src":dom.dataset["src"]
        }
    }
    static create(dom:HTMLElement){
        const config = ModalViewFactory.createConfig(dom);
        return ModalViewFactory.createView(config);

    }
    static createView(config:Object):ModalView{
        return new DomModalView(config);
    }
}