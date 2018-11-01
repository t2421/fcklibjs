class ModalLoader{
	constructor(options=null){
		this.options = options;
	}
	getContents(target,callback){
		this._load();
	}

	_load(){
		console.log("load")
	}

	_loadComplete(){
		console.log("loadComplete")
	}
}

export {ModalLoader}