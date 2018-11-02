import {ModalLoaderDom} from './ModalLoaderDom.js';
import {ModalLoaderAjax} from './ModalLoaderAjax.js';
import {ModalLoaderImage} from './ModalLoaderImage.js';

import {ModalLoaderYoutube} from './ModalLoaderYoutube.js';
import {ModalView} from './ModalView.js';
var modalTrigger = '.modal-open';


class ModalController{
	constructor(options){
		var defaults = {
			pagerTarget:'.modal__body',
			close:'<a class="modal-close">CLOSE</a>',
			closeInsert:false,
			outerClass:''
		}

		this.settings = $.extend({}, defaults, options);

		this.w = $(window);
		this.container = ModalController.htmlString;
		this.modal = new ModalView();
		this.group = {};
		this.currentGroupIndex = 0;
		this.currentGroup = undefined;
		this.initGroup();

		$(document).on('click','.modal-pager',(e)=>{

			if($(e.currentTarget).data('paging') == "next"){
				if(this.isNext()){
					this.currentGroupIndex++;	
				}else{
					this.currentGroupIndex=0;
				}
				
			}else if($(e.currentTarget).data('paging') == "prev"){
				if(this.isPrev()){
					this.currentGroupIndex--;	
				}else{
					this.currentGroupIndex=this.group[this.currentGroup].length-1;
				}
				
			}else{
				this.currentGroupIndex = Number($(e.currentTarget).data('paging'));
			}
			this.updatePager();
			var obj = this.group[this.currentGroup][this.currentGroupIndex];
			let target = obj.data("target");
			let type = obj.data("modaltype");
			this.show(type,target);
			return false;
		});

		$(document).on('click',modalTrigger,(e)=>{
			let target = $(e.currentTarget).data("target");
			let type = $(e.currentTarget).data("modaltype");
			let group2 = $(e.currentTarget).data("group");
			let paging2 = $(e.currentTarget).data("paging");

			this.currentGroup = group2;

			if(this.group[group2]){
				for (var i = 0; i < this.group[group2].length; i++) {
					if($(e.currentTarget).is(this.group[group2][i])){
						this.currentGroupIndex = i;
					}
				};
			}

			this.show(type,target);
			this.updatePager();
			return false;
		})

	
	}

	setSetting(options){
		this.settings = $.extend({}, this.settings, options);
	}

	isNext(){
		return this.group[this.currentGroup].length > this.currentGroupIndex+1;
	}

	isPrev(){
		return this.currentGroupIndex-1 >= 0;
	}

	init(modalLoader){
		this.modalLoader = modalLoader;
	}

	createPager(){
		if(!this.currentGroup) return;

		var html = "";
		html += '<a href="#" class="modal-pager modal-pager-prev" data-paging="prev">PREV</a>';
		
		
		for (var i = 0; i < this.group[this.currentGroup].length; i++) {
			html += '<a href="#" class="modal-pager" data-paging="'+i+'">'+i+'</a>';
		}
		html += '<a href="#" class="modal-pager modal-pager-next" data-paging="next">NEXT</a>';
		$(this.settings.pagerTarget).append(html);
	}

	updatePager(){
		if(!this.currentGroup) return;
		$('.modal-pager').removeClass('is-current');
		$('.modal-pager[data-paging='+this.currentGroupIndex+']').addClass('is-current');
	}

	initGroup(){
		
		$(modalTrigger).each((index, el) => {
			
			//modal内の次へ戻るの場合は処理をスキップ
			if($(el).parents(".modal-contents").length > 0) return;
			var groupName = $(el).data("group");
			
			if(groupName){
				if(!this.group[groupName]){
					this.group[groupName] = [];
				}
				this.group[groupName].push($(el));

			}
		});

		for(const index in this.group){
			
		}
		
	

	}

	show(type,target){
		this.modalLoader = this._getModalLoader(type);
		this.init(this.modalLoader);
		$('body').addClass('is-modal-show');
		$(document).trigger("modalShowReady");
		if($('.modal-window').length > 0){
			this.change(target);
			return;
		}
		$('body').append(this._getContainer(type));
		this.modalLoader.getContents(target,this.modalLoadHandler.bind(this));

		this.w.on("resize.fck:modal",(e)=>{
			this.modal.resize(this.w.width(),this.w.height());
		});

		if(this.settings.closeInsert){
			$('.modal__body').append(this.settings.close);	
		}
		

		$('.modal-window').on('click',(e)=>{
			 if (e.currentTarget === e.target) {
	            this.hide();
	        }
		});
		$('.modal-close').on('click',(e)=>{
			this.hide();
			return false;
		})

		$('.modal-window').addClass(this.settings.outerClass).css("opacity",0).animate({
			opacity:1
		},500,()=>{
			$(document).trigger("modalShowComplete");
		});

		this.createPager();
		
		$(document).keyup( (e)=> {
		     if (e.keyCode == 27) {
		        this.hide();

		    }
		});
	}

	_getModalLoader(type){
		if(type == "ajax"){
			return new ModalLoaderAjax({container:"#target-modal"});
		}

		if(type == "dom"){
			return new ModalLoaderDom();
		}
	
		if(type == "youtube"){
			return new ModalLoaderYoutube();
		}	

		if(type == "image"){
			return new ModalLoaderImage();
		}	
		throw new Error(`指定されたtype:${type}のLoaderはありません。`);
	}

	modalLoadHandler(contents){
		
		this.modal.set(contents);
		$(document).trigger("modalDomReady");

		this.modal.resize(this.w.width(),this.w.height());
		
	}

	change(target){
		this.modalLoader.getContents(target,this.modalLoadHandler.bind(this));
		$(".modal-window").scrollTop(0);
		$('.modal__body').css("opacity",0).animate({
			opacity:1
		},500,()=>{
			$(document).trigger("modalShowComplete");
		});
		$(document).trigger("modalChange");
	}

	hide(){
		$(document).trigger("modalHideReady");
		this.w.off("resize.fck:modal");
		$('.modal-window').animate({
			opacity:0
		},300,()=>{
			$(document).trigger("modalHideComplete");
			$(this.settings.pagerTarget).html("");
			$('.modal-window').remove();
		})
		
		$('.is-modal-show').removeClass('is-modal-show');
		this.currentGroupIndex = 0;
		this.currentGroup = undefined;
	}

	_getContainer(type){
		var option = "";
		if(type){
			option = "modal-type-"+type;
		}
		var html = `
		<div class="modal-window ${option}">
			<div class="modal__body">
				<div class="modal__contents"></div>
			</div>
		</div>`;

		return html;
	}

}

ModalController.htmlString = "";

ModalController.AJAX = "ajax";
ModalController.DOM = "dom";
ModalController.STRING = "string";

export default ModalController