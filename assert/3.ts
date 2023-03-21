interface Parent {
    name: string;
    age: number;
}

class Son implements Parent {
    constructor(public name: string, public age: number) {}
    study() {}
}

const parent: Parent = { name: 'jinle', age: 18 };
const son = parent as Son;
son.study();

export {};
