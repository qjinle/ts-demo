declare class Animal {
    name: string;
    milkName: string;
    static staticNum: number;
    constructor(name: string);
    run(): string;
}
declare class Cat extends Animal {
    constructor(name: string);
    run(): string;
}
