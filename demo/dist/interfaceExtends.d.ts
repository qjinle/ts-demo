interface A {
    a: number;
}
interface B extends A {
    b: string;
}
declare const res1: A;
declare const res2: B;
