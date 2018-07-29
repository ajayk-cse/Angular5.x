//REST parameter Pack the values into an Array
function addition(num1, num2) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    return num1 + num2 + others.length;
}
console.log(addition(100, 200, "Pune", true, 78.23));
var nums = [100, 20, 30, 40, 50, 5, 90];
var cities = ["A", "B", "C"];
var maxNum = Math.max.apply(Math, nums);
console.log(maxNum);
var newCityArray = cities.slice();
console.log(newCityArray);
function print(x, y, z) {
    console.log(x + " " + y + " " + z);
}
print.apply(void 0, cities);
