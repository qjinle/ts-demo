var MyLocalStorage = (function () {
    function MyLocalStorage() {
        console.log('new MyLocalStorage');
    }
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
MyLocalStorage.instance.setItem('userInfo', { username: 'jinle', age: 18 });
var v = MyLocalStorage.instance.getItem('userInfo');
