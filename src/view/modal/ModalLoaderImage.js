import {ModalLoader} from "./ModalLoader.js"
class ModalLoaderImage extends ModalLoader {
	constructor(options=null){
		super(options);
	}
	getContents(target,callback){
		super.getContents(target,callback);
		var image = new Image();
		image.onload = ()=>{
			callback(image);
			this._loadComplete();
		}
		image.onerror = ()=>{
			console.log("noimage")
			callback(undefined);
			this._loadComplete();
		}
		image.src = target;
		
		
	}
}

export {ModalLoaderImage}