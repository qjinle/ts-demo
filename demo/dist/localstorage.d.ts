declare class MyLocalStorage {
    static instance: MyLocalStorage;
    private constructor();
    static getInstance(): MyLocalStorage;
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
declare const s1: MyLocalStorage;
declare const s2: MyLocalStorage;
declare const v: any;
