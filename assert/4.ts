interface Parent {
    name: string;
    age: number;
}

class Son {
    constructor(
        public name: string,
        public age: number,
        public favor: string
    ) {}
    study() {}
}

const parent: Parent = { name: 'jinle', age: 18 };
const res = parent as Son;
res.study();

const son = new Son('jinle', 18, '打篮球');
const res1 = son as Parent;
res1.age;

export {};
