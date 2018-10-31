class ModalView{
	constructor(){
		this.w = $(window);
	}

	set(contents){
		this.body = $('.modal__body');
		this.body.find(".modal__contents").html(contents);
	}
	resize(w,h){
		this.isOverflowHeight()
	}

	isOverflowHeight(){
		if(this.body.outerHeight() > $(window).height()){
			$('html').addClass('is-modal-overflow-window');
			return true;
		}else{
			$('html').removeClass('is-modal-overflow-window');
			return false;
		}
	}
}

export {ModalView}