"use strict";
var assert = require('assert');
console.log(it);
test('create config after a click', function () {
    document.body.innerHTML = "\n        <a href=\"#\" class=\"js-modal\" data-type=\"youtube\" data-src=\"hogehoge\">youtube</a>\n        <a href=\"#\" class=\"js-modal\" data-type=\"image\" data-src=\"hogehoge\">image</a>\n        <a href=\"#\" class=\"js-modal\" data-type=\"dom\" data-src=\"hogehoge\">dom</a>\n        <a href=\"#\" class=\"js-modal\" data-type=\"ajax\" data-src=\"hogehoge\">ajax</a>\n        <a href=\"#\" class=\"js-modal\" data-group=\"group1\" data-type=\"ajax\" data-src=\"hogehoge\">ajax</a>\n        <a href=\"#\" class=\"js-modal\" data-group=\"group1\" data-type=\"dom\" data-src=\"hogehoge\">dom</a>\n        <a href=\"#\" class=\"js-modal\" data-group=\"group1\" data-type=\"image\" data-src=\"hogehoge\">image</a>\n    ";
    document.querySelectorAll(".js-modal").forEach(function (element) {
        element.addEventListener('click', function (e) {
            console.log(e.target);
        });
        element.dispatchEvent(new Event("click"));
    });
});
