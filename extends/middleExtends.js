function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.friends = ["a", "b", "c"]
Parent.prototype.eat = function() {
    console.log(this.name + "吃饭");
}

function Son(name, age, favor, sex) {
    Parent.call(this, name, age)
    this.favor = favor;
    this.sex = sex;
}

function _extends() {
    const Middle = function() {
        this.constructor = Son
    }
    Middle.prototype = Parent.prototype
    Son.prototype = new Middle()
    // Son.prototype.constructor = Son
}

// _extends()

function _extendsWithObjectCreate() {
    Son.prototype = Object.create(Parent.prototype)
    Son.prototype.constructor = Son
}

_extendsWithObjectCreate()

const son = new Son("jinle", 18, "打篮球", "男")
son.eat()
console.log(son)