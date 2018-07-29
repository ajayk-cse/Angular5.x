//REST parameter Pack the values into an Array

function addition(num1: number, num2: number, ...others): number {
    return num1 + num2 + others.length;
}

console.log(addition(100, 200, "Pune", true, 78.23));

var nums = [100, 20, 30, 40, 50, 5, 90]

var cities = ["A", "B", "C"];

let maxNum = Math.max(...nums);
console.log(maxNum);

var newCityArray = [...cities];
console.log(newCityArray);


function print(x?, y?, z?) {
    console.log(x + " " + y + " " + z);
}
print(...cities);