function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.friends = ["a", "b", "c"]
Parent.prototype.eat = function() {
    console.log(this.name + "吃饭");
}

function Son(favor, sex) {
    this.favor = favor;
    this.sex = sex;
}

const son1 = new Son("打篮球", "男")
console.log("son1:", son1)

console.log("Son.prototype:", Son.prototype)

Son.prototype = new Parent("张三", 18)
// Son.prototype = Parent.prototype
Son.prototype.constructor = Son
console.log("Son.prototype:", Son.prototype)

const son2 = new Son("打篮球", "男")
console.log("son2:", son2)