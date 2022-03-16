namespace Components {
    export class Header {
        constructor() {
            const el = document.createElement('div');
            el.innerText = 'this is header';
            document.body.appendChild(el);
        }
    }
}