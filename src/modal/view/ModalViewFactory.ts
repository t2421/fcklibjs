import ModalView from './ModalView';
import DomModalView from './DomModalView';
import ModalConfig from '../ModalConfig';

const $ = require('jquery');

export default class ModalViewFactory{
    
    static createConfig(dom:JQuery){
        var config!:ModalConfig;

        if(dom.data('group')){
            config = new ModalConfig(
                dom.data('type'),
                dom.data('src'),
                dom.data('group')
            )
            return config;
        }else{
            config = new ModalConfig(
                dom.data('type'),
                dom.data('src')
            )
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