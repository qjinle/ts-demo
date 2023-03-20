class Animal {
    public name: string;
    public milkName!: string; // 如果想声明属性，但不在构造器中赋值，可以加上!
    public static staticNum: number = 1;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
        console.log(this.name)
        console.log(Cat.staticNum)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}

new Cat('jack')