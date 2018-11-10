(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.fcklib2 = {})));
}(this, (function (exports) { 'use strict';

    var DomModalView = /** @class */ (function () {
        function DomModalView() {
        }
        DomModalView.prototype.show = function () {
            console.log("show");
        };
        DomModalView.prototype.hide = function () {
            console.log("hide");
        };
        return DomModalView;
    }());

    var ModalViewFactory = /** @class */ (function () {
        function ModalViewFactory() {
        }
        ModalViewFactory.create = function () {
            return new DomModalView();
        };
        return ModalViewFactory;
    }());

    var Modal = /** @class */ (function () {
        function Modal() {
            this.modalView = ModalViewFactory.create();
        }
        return Modal;
    }());

    exports.Modal = Modal;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmNrbGliMi51bWQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
