import ModalView from './ModalView';
import DomModalView from './DomModalView';

export default class ModalViewFactory{
    static create():ModalView{
        return new DomModalView();
    }
}