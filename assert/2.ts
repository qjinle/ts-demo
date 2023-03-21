class Parent {
    constructor(public name: string, public age: number) {}
}

class Son {
    public favor?: string;
    constructor(public name: string, public age: number) {}
    study() {}
}

const parent = new Parent("jinle", 18);
const son = parent as Son;
son.study();

export {};
