import Modal from "../src/modal/Modal"
const $ = require('jquery');

describe("Modal show test", () => {
  
  const modal = new Modal();
  
  it("show modal", () => {
    setHtml();
    
    $('.js-modal').on('click',function(this:HTMLElement){
      $(modal).on('modalShowComplete',()=>{
        console.log("showwwwwwww")
      })
      modal.show($(this));
      
      
    
    })
    expect($('.modal__contents').text()).toBe("Dom Inner");
        expect($('.modal-window').length).toBe(1);
    $('#modal-3').click();
  })
})



describe("Modal hide test", () => {
  
  const modal = new Modal();
  
  it("hide modal", () => {
    setHtml();
    $('.js-modal').on('click',function(this:HTMLElement){
      modal.show($(this));
      $('.modal__close').click();
      expect($('.modal-window').length).toBe(0);
    })
    $('#modal-3').click();
  })
})



function setHtml(){
  document.body.innerHTML = `
  <a href="#" id="modal-1" class="js-modal" data-type="youtube" data-src="hogehoge">youtube</a>
  <a href="#" id="modal-2" class="js-modal" data-type="image" data-src="hogehoge">image</a>
  <a href="#" id="modal-3" class="js-modal" data-type="dom" data-src="#domwrapper">dom</a>
  <a href="#" id="modal-4" class="js-modal" data-type="ajax" data-src="hogehoge">ajax</a>
  <a href="#" id="modal-5" class="js-modal" data-group="group1" data-type="ajax" data-src="hogehoge">ajax</a>
  <a href="#" id="modal-6" class="js-modal" data-group="group1" data-type="dom" data-src="hogehoge">dom</a>
  <a href="#" id="modal-7" class="js-modal" data-group="group1" data-type="image" data-src="hogehoge">image</a>
  <div id="domwrapper">Dom Inner</div>
`
}