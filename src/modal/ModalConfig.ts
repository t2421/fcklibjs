export default class ModalConfig{
    private _type:string;
    private _src:string;
    private _group:string;

    constructor(type:string,src:string,group:string=""){
        this._type = type;
        this._src = src;
        this._group = group;
    }

    get type():string{
        return this._type;
    }
    get src():string{
        return this._src;
    }
    get group():string{
        return this._group;
    }
}