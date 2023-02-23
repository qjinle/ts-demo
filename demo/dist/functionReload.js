"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages = [
    { id: 1, type: 'image', msg: '你好1' },
    { id: 2, type: 'audio', msg: '你好2' },
    { id: 3, type: 'audio', msg: '你好3' },
    { id: 4, type: 'image', msg: '你好4' },
    { id: 5, type: 'image', msg: '你好5' },
    { id: 6, type: 'audio', msg: '你好6' },
];
function getMessage(value, count) {
    if (count === void 0) { count = 1; }
    return typeof value === 'number'
        ? messages.find(function (m) { return m.id === value; })
        : messages.filter(function (m) { return m.type === value; }).splice(0, count);
}
var res1 = getMessage(2);
console.log(res1.type);
var res2 = getMessage('image', 2);
console.log(res2.length);
console.log(res1);
console.log(res2);
