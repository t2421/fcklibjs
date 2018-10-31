import {ModalLoader} from "./ModalLoader.js"
class ModalLoaderDom extends ModalLoader {
	constructor(){
		console.log("loader")
	}
	getContents(target,callback){	
		super.getContents(target,callback);	
		const contents = $(target).html();
		callback(contents);
	}
}

export {ModalLoaderDom}