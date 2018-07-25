var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.city = "";
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.display = function () {
    };
    return Employee;
}(Person));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.display = function () {
    };
    return Customer;
}(Person));
var person = new Employee();
person.city = "Mumbai";
var cities = ["a", "b", "c"];
function print(x, y, z) {
    console.log(x + " " + y + " " + z);
}
print.apply(void 0, cities);
// Strongly typed array
var product = /** @class */ (function () {
    function product() {
    }
    return product;
}());
