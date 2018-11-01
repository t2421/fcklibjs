import {ModalLoader} from "./ModalLoader.js"
class ModalLoaderAjax extends ModalLoader {
	constructor(options){
		super(options);
	}
	getContents(target,callback){
		super.getContents(target,callback);
		$.ajax({
			url: target,
			type: 'GET',
			dataType: 'html'
		})
		.done((data)=> {
			
			const contents = $('<div></div>').append(data).find(this.options.container).html();
			console.log(contents)
			callback(contents);
			this._loadComplete();
		})
		.fail(function() {
			
		}) 
		.always(function() {
			
		});
		
	}
}

export {ModalLoaderAjax}