class Demo {
    static test() {
        console.log('test')
    }
}

const demo = new Demo()

demo.__proto__.constructor.test()
console.log()