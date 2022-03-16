"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = void 0;
var Components;
(function (Components) {
    class Header {
        constructor() {
            const el = document.createElement('div');
            el.innerText = 'this is header';
            document.body.appendChild(el);
        }
    }
    Components.Header = Header;
})(Components = exports.Components || (exports.Components = {}));
