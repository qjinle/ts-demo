var MyLocalStorage = (function () {
    function MyLocalStorage() {
        console.log('new MyLocalStorage');
    }
    MyLocalStorage.getInstance = function () {
        if (!this.instance) {
            this.instance = new MyLocalStorage();
        }
        return this.instance;
    };
    MyLocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    MyLocalStorage.prototype.getItem = function (key) {
        var value = localStorage.getItem(key);
        return value !== null ? JSON.parse(value) : null;
    };
    MyLocalStorage.instance = new MyLocalStorage();
    return MyLocalStorage;
}());
var s1 = MyLocalStorage.getInstance();
s1.setItem('userInfo', { username: 'jinle', age: 18 });
var s2 = MyLocalStorage.getInstance();
var v = s2.getItem('userInfo');
