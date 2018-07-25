{
    var x = 100;
}
//console.log(x);
while (true) {
    var y = 200;
}
//console.log(y);
for (var i = 0; i < 5; i++) {
    //logic
}
function display(a, b, c) {
    if (a === void 0) { a = 100; }
    if (c === void 0) { c = 10; }
    return a + b;
}
function display1() {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return 100;
}
console.log(display(undefined, 10, 20));
//console.log(i);
