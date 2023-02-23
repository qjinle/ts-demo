// localStorage.setItem('userInfo', JSON.stringify({username: 'jinle', age: 18}))
// const value = localStorage.getItem('userInfo')
// const userInfo = value !== null ? JSON.parse(value) : null

class MyLocalStorage {
    static instance: MyLocalStorage = new MyLocalStorage()

    private constructor() {
        console.log('new MyLocalStorage')
    }

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new MyLocalStorage()
    //     }
    //     return this.instance
    // }

    public setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public getItem(key: string) {
        const value = localStorage.getItem(key)
        return value !== null ? JSON.parse(value) : null
    }
}

// file1.ts
// const s1 = MyLocalStorage.getInstance()
MyLocalStorage.instance.setItem('userInfo', {username: 'jinle', age: 18})

// file2.ts
// const s2 = MyLocalStorage.getInstance()
const v = MyLocalStorage.instance.getItem('userInfo')