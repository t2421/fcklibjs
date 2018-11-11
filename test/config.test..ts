const assert = require('assert');

console.log(it);

test('create config after a click', () => {
    document.body.innerHTML = `
        <a href="#" class="js-modal" data-type="youtube" data-src="hogehoge">youtube</a>
        <a href="#" class="js-modal" data-type="image" data-src="hogehoge">image</a>
        <a href="#" class="js-modal" data-type="dom" data-src="hogehoge">dom</a>
        <a href="#" class="js-modal" data-type="ajax" data-src="hogehoge">ajax</a>
        <a href="#" class="js-modal" data-group="group1" data-type="ajax" data-src="hogehoge">ajax</a>
        <a href="#" class="js-modal" data-group="group1" data-type="dom" data-src="hogehoge">dom</a>
        <a href="#" class="js-modal" data-group="group1" data-type="image" data-src="hogehoge">image</a>
    `
    document.querySelectorAll(".js-modal").forEach(element=>{
        element.addEventListener('click',(e)=>{
            console.log(e.target);
        })

        element.dispatchEvent(new Event("click"));
    })


});