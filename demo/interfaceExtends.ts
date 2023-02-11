interface A {
    a: number;
}

interface B extends A {
    b: string;
}

const res1: A = {a:2}
const res2: B = {a: 1, b: 's'}