import Modal from "../src/modal/view/ModalViewFactory"

import $ from "jquery";
import ModalViewFactory from "../src/modal/view/ModalViewFactory";

console.log($);
/**
 * Dummy test
 */
describe("ModalViewFactory test", () => {
  it("create multiple modal config", () => {
    const $ = require('jquery');
    document.body.innerHTML = `
        <a href="#" class="js-modal" data-type="youtube" data-src="hogehoge">youtube</a>
        <a href="#" class="js-modal" data-type="image" data-src="hogehoge">image</a>
        <a href="#" class="js-modal" data-type="dom" data-src="hogehoge">dom</a>
        <a href="#" class="js-modal" data-type="ajax" data-src="hogehoge">ajax</a>
        <a href="#" class="js-modal" data-group="group1" data-type="ajax" data-src="hogehoge">ajax</a>
        <a href="#" class="js-modal" data-group="group1" data-type="dom" data-src="hogehoge">dom</a>
        <a href="#" class="js-modal" data-group="group1" data-type="image" data-src="hogehoge">image</a>
    `

    $('.js-modal').on('click',function(this:HTMLElement){
      let config:any = ModalViewFactory.createConfig(this);
      if(config["type"]=="multiple"){
        expect(config["list"].length).toBe(3);
      }
    })
    $('.js-modal').click();

    
  })

})

// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';

  
//   const $ = require('jquery');
 
//   // Use jquery to emulate a click on our button
//   $('#button').click();

// });