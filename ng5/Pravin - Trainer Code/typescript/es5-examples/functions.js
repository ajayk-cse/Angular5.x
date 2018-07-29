function addition(num1, num2) {

    if (!num1) {
        num1 = 2000;
    }
    if (!num2) {
        num2 = 3000;
    }
    return num1 + num2;
}

console.log(addition());
console.log(addition(100));
console.log(addition(100, 200));
console.log(addition("Pravinkumar ", "R.D."));
console.log(addition("Pravinkumar ", "R.D.", "Pune"));

function plus(num1, num2) {
    var extraParams = Array.prototype.slice.call(arguments, 2);
    return num1 + num2 + extraParams.length;
}

console.log(plus(10, 20, "Hello", 23.90, true));