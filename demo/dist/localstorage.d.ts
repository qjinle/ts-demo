declare class MyLocalStorage {
    static instance: MyLocalStorage;
    private constructor();
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
declare const v: any;
