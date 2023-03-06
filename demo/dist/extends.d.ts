declare class Animal {
    name: string;
    milkName: string;
    constructor(name: string);
    run(): string;
}
declare class Cat extends Animal {
    constructor(name: string);
    run(): string;
}
