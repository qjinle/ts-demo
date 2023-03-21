class Parent {
    public static staticNum = 1;
    public static logStaticNum = () => {
        console.log(Parent.staticNum);
    };
    constructor(public name: string, public age: number) {}
    eat() {
        console.log(this.name + "吃饭");
    }
}

class Son extends Parent {
    constructor(
        name: string,
        age: number,
        public favor: string,
        public sex: string
    ) {
        super(name, age);
    }
    study() {}
}

const parent = new Parent("jinle", 18);
parent.eat();
const son = parent as Son;
son.study();

export {};
