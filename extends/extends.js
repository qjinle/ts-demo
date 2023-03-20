"use strict";
var __extends = (this && this.__extends) || (function () {
    // 继承静态属性
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        // 寄生组合式继承
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.eat = function () {
        console.log(this.name + "吃饭");
    };
    Parent.staticNum = 1;
    Parent.logStaticNum = function () { console.log(Parent.staticNum); };
    return Parent;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age, favor, sex) {
        // 寄生组合式继承
        var _this = _super.call(this, name, age) || this;
        _this.favor = favor;
        _this.sex = sex;
        return _this;
    }
    return Son;
}(Parent));
var son = new Son("jinle", 18, "打篮球", "男");
son.eat();
Son.logStaticNum();
console.log(son);