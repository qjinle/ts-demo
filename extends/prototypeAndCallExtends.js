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
Son.prototype = new Parent()
Son.prototype.constructor = Son

console.log("Son.prototypeL:", Son.prototype)

const son = new Son("jinle", 18, "打篮球", "男")
son.eat()
console.log(son)
const son1 = new Son("zhangsan", 48, "打篮球", "男")
son1.eat()
console.log(son1)