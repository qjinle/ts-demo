"use strict";
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
})(Components || (Components = {}));
///<reference path='./components.ts' />
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
