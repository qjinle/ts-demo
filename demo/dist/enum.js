var Family;
(function (Family) {
    Family[Family["Father"] = 1] = "Father";
    Family[Family["Mother"] = 2] = "Mother";
    Family[Family["Son"] = 3] = "Son";
})(Family || (Family = {}));
console.log(Family);
var Family2;
(function (Family2) {
    Family2["Father"] = "fa";
    Family2["Mother"] = "mo";
    Family2["Son"] = "son";
})(Family2 || (Family2 = {}));
console.log(Family2);
