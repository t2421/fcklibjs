import {ModalLoader} from "./ModalLoader.js"
class ModalLoaderYoutube extends ModalLoader {
	constructor(options=null){
		super(options);
	}
	getContents(target,callback){
		super.getContents(target,callback);
		const contents = `
		<div class="modal-youtube-container">
		<iframe width="560" height="315" src="${target}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
		`;
		console.log(contents)
		callback(contents);
	}
}

export {ModalLoaderYoutube}